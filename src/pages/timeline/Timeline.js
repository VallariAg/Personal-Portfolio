import React from 'react';
import './Timeline.css';
import baby from './baby.svg';
import girl from './running-girl.svg';

let side = "left";
let changeSide = (side) => {
    return side === "left" ? "right" : "left";
}

function Block(props) {
    side = changeSide(side);
    return (
        <div class={"container " + side}>
            <div class="content">
                <h4 style={{ color: "#CB6262", margin: "10px 0px 0px 0px" }}>{props.title}</h4>
                <div style={{ marginTop: 0, color: "grey" }}>{props.title}</div>
                <p style={{ color: "#CB6262", left: 0, marginLeft: 0 }} class="time">{props.time}</p>
            </div>
        </div>
    )
}

function Timeline() {
    return (
        <div>
            <div className="timelineHeader">
                <img style={{ height: "20vh" }} src={girl} alt="icon" />
                <h1 style={{ color: "black" }}>what am I upto?</h1>
            </div>
            <div className="timeline-container">
                <div class="timeline">
                    <Block title="Women TechMakers Engineering Fellow" description="" time="April 2020" />
                    <Block title="2017" description="" time="WTEF" />
                    <Block title="2017" description="" time="WTEF" />
                    <Block title="2017" description="" time="WTEF" />
                    <Block title="2017" description="" time="WTEF" />
                </div>

                <div style={{ color: "white" }}>
                    <h4> May 2000</h4>
                    <img src={baby} class="baby" alt="baby" />
                </div>
            </div>
        </div>
    )
}

export default Timeline;


