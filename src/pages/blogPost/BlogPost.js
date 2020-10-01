import React from 'react';
// material
// import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';



function BlogPost() {
    const { id } = useParams();

    const { loading, error, data } = useQuery(BlogQuery, { variables: { id: parseInt(id) } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>

    const { title, body, createdAt } = data.post;

    return (
        <div>
            <h1>{title}</h1>
            <h6>{createdAt}</h6>
            <p>{body}</p>
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

