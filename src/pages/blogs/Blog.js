import React from 'react';
import "./Blog.css";
import girl from "./reading-girl.svg";
import headImg from "./try.jpg";
// material
import { Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

function BlogList() {
    let { loading, error, data } = useQuery(AllBlogQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>

    return data.posts.map(({ id, title, description }) => (
        <BlogCard title={title} description={description} id={id} />
    ));
}

function BlogCard({ title, description, id }) {
    return (
        <Link style={{ textDecoration: 'none' }} to={"/blog/" + id}>
            <Card className="Card">
                <CardActionArea>
                    <CardMedia style={{ height: 140 }} image={headImg} title={title} />
                    <CardContent>
                        <p className="titles">{title}</p>
                        <p className="description">{description}</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

function Blog() {
    return (
        <div className="blog">
            <div className="blogsHeader">
                <img className="icon-girl" src={girl} alt="icon-girl" />
                <h1 style={{ color: "#000" }}>blogs</h1>
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
        posts {
        title 
        id
        description
    }
}
`;
