import React from 'react';
import "./BlogPost.css";
import CodeBlock from "./CodeBlock";

import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import gfm from 'remark-gfm'
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ReadingProgress from "./ReadingProgress";

function BlogPost() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(BlogQuery, { variables: { id: parseInt(id) } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>

  let { title, body, createdAt } = data.post;
  createdAt = new Date(parseInt(createdAt)).toDateString();

  const readingTarget = React.createRef();
  return (
    <>
      <ReadingProgress className="sticky-progresss" target={readingTarget} />
      <div className="BlogPost" ref={readingTarget}>
        <div style={{ fontSize: "5vh", marginTop: "2%" }}>{title}</div>
        <p style={{ color: "grey", fontSize: "80%", margin: 0 }}>{createdAt}</p>
        <ReactMarkdown
          className="articleBody"
          source={body}
          transformImageUri={uri =>
            uri.startsWith("http") ? uri : `${process.env.REACT_APP_SERVER_URL}/blog/${id}/${uri}`
          }
          escapeHtml="false"
          plugins={[
            RemarkMathPlugin,
            gfm
          ]}
          renderers={{
            code: ({ language, value }) => <CodeBlock language={language} code={value} />,
            math: ({ value }) => <BlockMath>{value}</BlockMath>,
            inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>,
            image: ({ alt, src, title }) => (<img alt={alt} src={src} title={title} style={{ margin: "0 auto", display: "block" }} />)
          }}
        />
      </div>
    </>
  )
}


export default BlogPost;

const BlogQuery = gql`
query BlogQuery($id: Int!) {
  post(id: $id){
    title
    id
    description
    body
    createdAt
  }
}
`;

