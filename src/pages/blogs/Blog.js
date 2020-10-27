import React from 'react';
import "./Blog.css";
import girl from "./reading-girl.svg";
// import headImg from "./try.jpg";
// material
import { Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

function BlogList() {
    let { loading, error, data } = useQuery(AllBlogQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>

    return data.posts.map(({ id, title, description, createdAt }) => (
        <BlogCard title={title} description={description} id={id} createdAt={createdAt} />
    ));
}

function BlogCard({ title, description, id, createdAt }) {
    const serverURL = process.env.REACT_APP_SERVER_URL;
    const headImg = `${serverURL}/blog/${id}/${id}.jpg`; //TODO: for all image formats /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i

    let date = new Date(parseInt(createdAt));

    return (
        <Link className="Card" style={{ textDecoration: 'none', height: "100%" }} to={"/blog/" + id}>
            <Card style={{ height: "100%" }}>
                <CardActionArea>
                    <CardMedia className="ArticleImg" image={headImg} title={title} />
                    <CardContent className="cardContent">
                        <p className="titles">{title}</p>
                        <p className="description">{description}</p>
                        <p className="createdAt">{date.toDateString()}</p>
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
                <h1 className="pageHeader">Blogs</h1>
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
        createdAt
    }
}
`;
