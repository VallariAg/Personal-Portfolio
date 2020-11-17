import React, { useState } from "react";
import "./components.css";
// import useViewPort from "./../../../hooks/useViewport"
// import Carousel from "./../../../components/carousel/Carousel"
import { Dialog, DialogTitle, Button, Card, CardHeader, Typography, CardActions, CardContent, Avatar, CardMedia } from '@material-ui/core';

const ProjectData = {
    0: "",
    // 1: {
    //     title: "Gallery-App",
    //     body: "A Progressive Web App to display your images in a gallery, made with Angular.",
    //     description: "I wanted to create a place to show and record illustrations I created. An image gallery. Things I learned while making this: Angular, Lazy-loading",
    //     date: "",
    //     avatar: "GA",
    //     img: "https://raw.githubusercontent.com/VallariAg/Gallery-library/master/demo.png",
    //     link: "https://github.com/VallariAg/Gallery-library",
    // },    
    1: {
        title: "Portfolio Website",
        body: "Portfolio portfolio. Made with React, Node, Express, Apollo GraphQL, Mikro ORM, PostgreSQL, and deployed it on AWS EC2 instance with Nginx.",
        description: "Psst.. it's the website you're seeing this!",
        date: "",
        avatar: "GA",
        img: "https://raw.githubusercontent.com/VallariAg/Gallery-library/master/demo.png",
        link: "https://github.com/VallariAg/Gallery-library",
    },
    2: {
        title: "Fake News Classifier",
        body: "My first Machine Learning project, a Fake News Identification model, and a chrome extension that uses the model to classify news articles online as fake or fact.",
        description: "Wanting to explore the domain of Machine Learning, we (me and my two other friends) came across a paper 'Fake News Detection by Stanford University, in 2017', which proposed a way to build a model to verify if a given news content is real or fake. We built our model following the paper, then made a chrome extension to use it on news articles online. The model requires a lot of improvement which can be achieved by feeding it more diverse kind of input dataset to train. Python's sklearn and pandas library was used to train the model, Flask to make server API, and React to make the extension's front-end.",
        date: "",
        avatar: "FN",
        img: "https://i.imgur.com/TB0kgtq.png",
        link: "https://github.com/VallariAg/Fake-News-Classifier-Extension",
    },
    3: {
        title: "Attendance Tracker",
        body: "A website made to keep a record of classes attended every week and track attendance percentage % for each subject. Made with Vanilla JavaScript and Bootstrap.",
        description: "When I came in college, it was hard to keep track of attendace. So, I started with a solution in mind to keep track of classes and percentage attendance in every subject. Made this with Vanilla JavaScript, CSS with Bootstrap, and Firebase for storing Database and Authentication for different users.",
        date: "",
        avatar: "AT",
        img: "https://i.imgur.com/OTgVE2i.png",
        link: "https://github.com/VallariAg/Attendance-Tracker",
    }
}


function SimpleDialog({ onClose, selectedValue, open }) {

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle className="dialog-title">
                {/* <Avatar alt="project" >
                    {ProjectData[selectedValue]["avatar"]}
                </Avatar> */}
                {ProjectData[selectedValue]["title"]}
            </DialogTitle>

            <div className="project-dialog">
                <img className="project-dialog-imgs" alt="img" src={ProjectData[selectedValue]["img"]} />
                <div className="project-dialog-txt"> {ProjectData[selectedValue]["description"]}</div>
                <Button variant="contained" className="project-dialog-btn" href={ProjectData[selectedValue]["link"]} target="_blank">PROJECT LINK</Button>
                {/* <h4 className="project-dialog-descp">{ProjectData[selectedValue]["description"]}</h4> */}
            </div>
        </Dialog>
    )
}

function ProjectCard({ id, handleClickOpen }) {
    // return (
    //     <div className="project-item" style={{ width: "90%" }} onClick={() => handleClickOpen(id)} target="_blank">
    //         <img className="project-icon" src={ProjectData[id]["img"]} alt="project" />
    //         <h3>{ProjectData[id]["title"]}</h3>
    //         <p style={{ color: "grey" }}> {ProjectData[id]["body"]} </p>
    //     </div>
    // )
    return (
        <Card className="project-item">
            <CardHeader
                avatar={
                    <Avatar>
                        {ProjectData[id]["avatar"]}
                    </Avatar>
                }
                title={ProjectData[id]["title"]}
                subheader={ProjectData[id]["date"]}
            />
            <CardMedia
                // className=""
                image={ProjectData[id]["img"]}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {ProjectData[id]["body"]}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => handleClickOpen(id)}>
                    Learn More
                    </Button>
            </CardActions>
        </Card>
    )
}
function Project() {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(0);

    const handleClickOpen = (value) => {
        setOpen(true);
        setSelectedValue(value);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedValue(0);
    };
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <h2 className="sectionHeader">Projects</h2>
            </div>
            <p style={{ textAlign: "center" }}>I love to write as I learn, and to help others understand stuff. Hit 100+ views on "Time Complexity" blog in a week!</p>
            <div className="project-section">
                <ProjectCard handleClickOpen={handleClickOpen} id={1} />
                <ProjectCard handleClickOpen={handleClickOpen} id={2} />
                <ProjectCard handleClickOpen={handleClickOpen} id={3} />
            </div>
            <SimpleDialog onClose={handleClose} selectedValue={selectedValue} open={open} />
            <a href="https://github.com/VallariAg" target="_blank" rel="noopener noreferrer"><p style={{ textAlign: "center" }}> Checkout other projects on Github →</p></a>
        </div>)
}

export default Project;
