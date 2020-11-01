import React, { useState } from "react";
import "./components.css";
import useViewPort from "./../../../hooks/useViewport"
import { Link } from "react-router-dom";
import Carousel from "./../../../components/carousel/Carousel"
import Paper from '@material-ui/core/Paper';

function Blog() {
    return (
        <div className="blog-item" style={{ width: "90%" }}>
            <h3>Blog Heading</h3>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
        </div>)
}


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
    if (width < 800) {
        return (<div className="blogs-section">
            <Carousel data={data} />
        </div>)

    } else {
        return (<div className="blogs-section">
            {Blog()}
            {Blog()}
            {Blog()}
        </div>)
    }
}
function Blogs() {
    const { width, height } = useViewPort();

    return (
        <div>
            <h2 style={{ padding: "0" }}>Some blogs I wrote</h2>
            <p>I love to write as I learn, and to help others understand stuff. Hit 100+ views on "Time Complexity" blog in a week!</p>
            {displayBlog(width)}
            <p style={{ textAlign: "right" }}> <Link to="/blog" >Checkout all by blogs → </Link></p>
        </div>)
}

export default Blogs;
