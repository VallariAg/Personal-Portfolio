import React from 'react';
import "./Blog.css";
import { Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

function BlogList() {
    let { loading, error, data } = useQuery(AllBlogQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>

    return data.blogs.map(({ id, title, description, createdAt, imgHead, link }) => {
        return <BlogCard title={title} description={description} link={link} id={id} createdAt={createdAt} imgHead={imgHead} />
    });
}

function BlogCard({ title, description, id, createdAt, imgHead, link }) {
    
    let date = new Date(createdAt);

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="Card" style={{ textDecoration: 'none', height: "100%" }}>
            <Card style={{ height: "100%" }}>
                <CardActionArea>
                    <CardMedia className="ArticleImg" image={imgHead} title={title} />
                    <CardContent className="cardContent">
                        <p className="titles">{title}</p>
                        <p className="description">{description}</p>
                        <p className="createdAt">{date.toDateString()}</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        </a>
    )
}

function Blog() {
    return (
        <div className="blog">
            <div className="blogsHeader">
                <h1 className="pageHeader">Blogs</h1>
                <p className="pageDescription">I write about technologies to learn, and to help others understand these concepts.</p>
            </div>
            <div className="article-container">
                {BlogList()}
            </div>
        </div>
    )
}


export default Blog;


const AllBlogQuery = gql`
query getAllBlogs {
        blogs {
            title
            id
            description
            createdAt
            imgHead
            link
    }
}
`;
