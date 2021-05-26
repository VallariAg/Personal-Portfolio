import React from "react";
import "./components.css"
// import star from "./../media/star.svg";
import { Link } from "react-router-dom";

const data = [
    {
        title: "Women TechMakers Engineering Fellow",
        body: "Selected among the top 126 participants across India for Women Techmakers Engineering Fellow, a 2 year professional training program by TalentSprint, supported by Google.",
        image: "https://papercallio-production.s3.amazonaws.com/uploads/event/logo/255/WT_logo_vertical_pos.png"
    },
    {
        title: "Developer Student Club Team Member",
        body: "Became Development Team Member of DSC-BVP. Developer Student Clubs are university based community groups for students interested in Google developer technologies.",
        image: "https://miro.medium.com/fit/c/1360/1360/1*pjxAGSGs_ed_pAMaCc8Ttw.png"
    },
]

function Achivement({ title, body, image }) {
    return (
        <div className="achive-item">
            <img src={image} alt="icon" />
            <div>
                <h4 style={{ color: "black" }}>
                    {title}
                </h4>
                <h4>{body}</h4>
            </div>
        </div>)
}

function Achivements() {
    return (<div className="achivement">
        <div>
            <h1 className="sectionHeader">Achivements</h1>
        </div>
        <div className="achive-container">
            {
                data.map(({ title, body, image }) => (<Achivement title={title} body={body} image={image} />))
            }
        </div>
        <Link to="/timeline"><p style={{ textAlign: "right" }}> Checkout more achivements →</p></Link>

    </div>)
}

export default Achivements;
