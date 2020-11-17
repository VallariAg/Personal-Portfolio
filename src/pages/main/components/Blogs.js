import React from "react";
import "./components.css";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';

const BlogQuery = gql`
    query GETBlogQuery($id: Int!) {
      post(id: $id){
        title
        description
        id
        createdAt
      }
    }
    `;
function BlogItem({ id }) {
    let { loading, error, data } = useQuery(BlogQuery, { variables: { id: parseInt(id) } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>

    return (<BlogCard
        title={data.post.title}
        description={data.post.description}
        id={id}
        createdAt={data.post.createdAt}
    />)
}

function BlogCard({ title, description, id, createdAt }) {
    const serverURL = process.env.REACT_APP_SERVER_URL;
    const headImg = `${serverURL}/blog/${id}/${id}.jpg`; //TODO: for all image formats /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i

    let date = new Date(parseInt(createdAt));

    return (
        <Link className="Card blog-item" style={{ textDecoration: 'none', height: "100%" }} to={"/blog/" + id}>
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
                {/* <BlogItem id="3" /> */}
            </div>
            <p style={{ textAlign: "center" }}> <Link to="/blog" >Checkout all by blogs → </Link></p>
        </div>)
}

export default Blogs;
