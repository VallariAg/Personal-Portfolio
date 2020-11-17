import React from "react";
import "./components.css";
import useViewPort from "./../../../hooks/useViewport"
import { Link } from "react-router-dom";
// import Carousel from "./../../../components/carousel/Carousel"
import Paper from '@material-ui/core/Paper';
import { Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';

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
// function Blog() {
//     return (
//         <div className="blog-item" style={{ width: "90%" }}>
//             <h3>Blog Heading</h3>
//             <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
//         </div>)
// }


const data = [
    (<Paper><div className="blog-item">
        <h3>Blog Heading</h3>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
    </div></Paper>)
    ,
    (<Paper><div className="blog-item">
        <h3>Blog Heading</h3>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
    </div></Paper>),
    (<Paper><div className="blog-item">
        <h3>Blog Heading</h3>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
    </div></Paper>)
]
function displayBlog(width) {
    // if (width < 800) {
    //     return (<div className="blogs-section">
    //         <Carousel data={data} />
    //     </div>)

    // } else {
    return (<div className="blogs-section">
        <BlogCard title="Time" description="something" id="1" createdAt="1605617193195" />
        <BlogCard title="Time" description="something" id="1" createdAt="1605617193195" />
        <BlogCard title="Time" description="something" id="1" createdAt="1605617193195" />
        {/* {Blog()} */}
    </div>)
    // }
}
function Blogs() {
    const { width } = useViewPort();

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <h2 className="sectionHeader">Blogs</h2>
            </div>
            <p style={{ textAlign: "center" }}>I love to write as I learn, and to help others understand stuff. Hit 100+ views on "Time Complexity" blog in a week!</p>
            {displayBlog(width)}
            <p style={{ textAlign: "center" }}> <Link to="/blog" >Checkout all by blogs → </Link></p>
        </div>)
}

export default Blogs;
