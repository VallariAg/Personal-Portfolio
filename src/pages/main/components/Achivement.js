import React from "react";
import "./components.css"
import { Paper } from '@material-ui/core';
import star from "./../media/star.svg";

const data = [
    {
        title: "Women TechMakers Engineering Fellow",
        body: "Selected among the top 126 participants across India for Women Techmakers Engineering Fellow, a 2 year professional training program by TalentSprint, supported by Google."
    },
    {
        title: "Developer Student Club Team Member",
        body: "Became Development Team Member of DSC-BVP. Developer Student Clubs are university based community groups for students interested in Google developer technologies.",
    },
]

function Achivement({ title, body }) {
    return (
        <div className="achive-item">
            <h2><img style={{ height: "20px" }} src={star} alt="star-icon" /> {title}</h2>
            <h4>{body}</h4>
        </div>)
}

function Achivements() {
    return (<div className="achivement">
        <div>
            <h1 className="sectionHeader">Achivements</h1>
        </div>
        {
            data.map(({ title, body }) => (<Achivement title={title} body={body} />))
        }
        <a href="/timeline"><p style={{ textAlign: "right" }}> Checkout other milestones →</p></a>

    </div>)
}

export default Achivements;
