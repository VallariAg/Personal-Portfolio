import React, { useEffect, useState } from 'react';
import "./BlogPost.css";
import CodeBlock from "./CodeBlock";

import ReactMarkdown from 'react-markdown';
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
        <div style={{ fontSize: "5vh" }}>{title}</div>
        <p style={{ color: "grey", fontSize: "80%", margin: 0 }}>{createdAt}</p>
        <ReactMarkdown
          className="articleBody"
          source={body}
          renderers={{ code: ({ language, value }) => <CodeBlock language={language} code={value} /> }}
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

