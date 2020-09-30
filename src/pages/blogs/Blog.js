import React from 'react';
import "./Blog.css";
import girl from "./reading-girl.svg";
// material
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';

function BlogCard() {
    return (
        <Card style={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia style={{ height: 140 }} image={girl} title="Title" />
                <CardContent>
                    <h5>Article title</h5>
                    <p> Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary"> Read </Button>
            </CardActions> */}
        </Card>
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
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default Blog;
