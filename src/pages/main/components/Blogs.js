import React from "react";
import "./components.css";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';

const BlogQuery = gql`
query MyQuery($id: Int) {
  blogs(where: {id: {_eq: $id}}) {
    title
    id
    description
    createdAt
    imgHead
    link
  }
}
    `;
function BlogItem({ id }) {
    let { loading, error, data } = useQuery(BlogQuery, { variables: { id: parseInt(id) } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>
    
    console.log(data)
    data = data.blogs[0]
    console.log(data)
    return (<BlogCard
        title={data.title}
        description={data.description}
        id={id}
        createdAt={data.createdAt}
        imgHead={data.imgHead}
        link={data.link}
    />)
}

function BlogCard({ title, description, id, createdAt, imgHead, link }) {

    let date = new Date(parseInt(createdAt));

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="Card blog-item" style={{ textDecoration: 'none', height: "100%" }}>
            <Card style={{ height: "100%", }}>
                <CardActionArea>
                    <CardMedia className="ArticleImg" image={imgHead} title={title} />
                    <CardContent className="cardContent">
                        {/* <CardHeader title={title} /> */}
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

function Blogs() {

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <h2 className="sectionHeader">Blogs</h2>
            </div>
            <p style={{ textAlign: "center" }}>I love to write as I learn, and to help others understand stuff. Hit 100+ views on "Time Complexity" blog in a week!</p>
            <div className="blogs-section">
                <BlogItem id="1" />
                <BlogItem id="2" />
                <BlogItem id="3" />
            </div>
            <p style={{ textAlign: "center" }}> <Link to="/blog" >Checkout all by blogs → </Link></p>
        </div>)
}

export default Blogs;
