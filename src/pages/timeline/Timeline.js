import React, { useState } from 'react';
import './timeline.css';

function MoreDesc(descButton, description) {
    if (descButton == "more" || descButton == "") {
        return ""
    }
    else {
        return <p className="moreDesc">{description}</p>
    }
}
function Block({ time, title, body, description }) {
    const [descButton, setdescButton] = useState("more");
    // if (description === "") {
    //     setdescButton("");
    // }
    return (
        <li>
            <div className="bullet pink"></div>
            <div className="time">{time}</div>
            <div className="body">
                <h3>{title}</h3>
                <h4>{body}</h4>
                {MoreDesc(descButton, description)}
                <button
                    className="descButton"
                    onClick={() => { (descButton == "more") ? setdescButton("less") : setdescButton("more") }}>
                    {descButton}
                </button>
            </div>
        </li>
    )
}
function Timeline() {
    return (
        <div className="Timeline">
            <div className="blogsHeader">
                <h1 style={{ color: "#000" }}>timeline </h1>
            </div>
            <div class="container">
                <div class="timeline">
                    <ul>
                        <Block time="March 2020" title="something" description="shhs" body="Some achivement idk Some achivement idkSome achivement idkSome achivement idkSome achivement idk" />
                        <Block time="March 2030" title="something" description="shhs whaaaaaaaaaaaat" body="Some achivement idk" />
                        <Block time="May 2000" title="birth" description="" body="worst achivement" />

                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Timeline;


