import React from "react";
import { Paper } from '@material-ui/core';

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
    return (<div style={paperStyle}>

        <h3>🚩 WTEF</h3>
        <h4 style={{ marginLeft: "3.5%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</h4>
    </div>)
}

function Achivements() {
    return (<div style={container}>
        <Achivement />
        <Achivement />
        <Achivement />
    </div>)
}

export default Achivements;
