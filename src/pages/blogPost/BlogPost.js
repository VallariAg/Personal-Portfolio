import React from 'react';
import "./BlogPost.css";
import ReactMarkdown from 'react-markdown';
// material
import CodeBlock from "./CodeBlock";
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import markdownit from "markdown-it";

// const md = markdownit({
//   html: false,
//   breaks: true,
//   typographer: true
// });

const md = markdownit("commonmark");
function BlogPost() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(BlogQuery, { variables: { id: parseInt(id) } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>

  let { title, body, createdAt } = data.post;
  // createdAt = new Date(createdAt);
  return (
    <div className="BlogPost">
      <div style={{ fontSize: "5vh" }}>{title}</div>
      <h6>{createdAt}</h6>
      <ReactMarkdown
        className="articleBody"
        source={body}
        renderers={{ code: ({ language, value }) => <CodeBlock language={language} code={value} /> }}
      />
    </div>
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

