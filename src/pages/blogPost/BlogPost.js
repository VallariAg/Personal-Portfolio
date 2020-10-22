import React from 'react';
import "./BlogPost.css";
import CodeBlock from "./CodeBlock";

import ReactMarkdown from 'react-markdown';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(BlogQuery, { variables: { id: parseInt(id) } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>

  let { title, body, createdAt } = data.post;

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

