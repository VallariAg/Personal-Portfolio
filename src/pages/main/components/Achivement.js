import React from "react";
import "./components.css"
import { Paper } from '@material-ui/core';
import star from "./../media/star.svg";

const paperStyle = {
    padding: "2%",
}
const container = {
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr",
    width: "30%",
    // justifySelf: "right"
}

function Achivement() {
    return (<div className="achive-item">

        <h2><img style={{ height: "20px" }} src={star} alt="star-icon" /> WTEF</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</h4>
    </div>)
}

function Achivements() {
    return (<div className="achivement">
        <div>
            <h1 className="sectionHeader">Achivements</h1>
        </div>
        <Achivement />
        <Achivement />
        <Achivement />
        <a href="/timeline"><p style={{ textAlign: "right" }}> Checkout other milestones →</p></a>

    </div>)
}

export default Achivements;
