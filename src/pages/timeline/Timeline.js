import React, { useState } from 'react';
import './timeline.css';

function MoreDesc(descButton, descInfo) {
    if (descButton == "more" || descButton == "") {
        return ""
    }
    else {
        return <p className="moreDesc">{descInfo}</p>
    }
}
function Block({ time, heading, desc, descInfo }) {
    const [descButton, setdescButton] = useState("more");
    // if (descInfo === "") {
    //     setdescButton("");
    // }
    return (
        <li>
            <div className="bullet pink"></div>
            <div className="time">{time}</div>
            <div className="desc">
                <h3>{heading}</h3>
                <h4>{desc}</h4>
                {MoreDesc(descButton, descInfo)}
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
        <div>
            <div className="blogsHeader">
                <h1 style={{ color: "#000" }}>timeline </h1>
            </div>
            <div class="container">
                <div class="timeline">
                    <ul>
                        <Block time="March 2020" heading="something" descInfo="shhs" desc="Some achivement idk Some achivement idkSome achivement idkSome achivement idkSome achivement idk" />
                        <Block time="March 2030" heading="something" descInfo="shhs whaaaaaaaaaaaat" desc="Some achivement idk" />
                        <Block time="May 2000" heading="birth" descInfo="" desc="worst achivement" />

                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Timeline;


