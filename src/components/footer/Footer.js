import React from "react";
import { a } from "react-router-dom";
// icons
import twitter from "./media/twitter.svg";
import instagram from "./media/instagram.svg";
import github from "./media/github.svg";
import dribbble from "./media/dribble.svg";

let footer_style = {
    background: "#e4a9a9",
    // background: "#ebbcbc",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    padding: "1% 15% 1% 15%",
    margin: "3vh 0% 0% 0"
}
let icon_style = {
    // background: "#DFA2A2",
    // borderRadius: "30%",
    // border: "5px",
    // padding: "1.5%",
    alignContent: "center",
    justifySelf: "center",
    height: "2vw",
    minHeight: "30px"
}
function Footer() {
    return (<div style={footer_style}>
        <a href="https://twitter.com/VallariAg">
            <img style={icon_style} src={twitter} alt="twitter" />
        </a>
        <a href="https://www.instagram.com/vallariag/">
            <img style={icon_style} src={instagram} alt="instagram" />
        </a>
        <a href="https://dribbble.com/VallariAg">
            <img style={icon_style} src={dribbble} alt="dribbble" />
        </a>
        <a href="https://github.com/VallariAg">
            <img style={icon_style} src={github} alt="github" />
        </a>





    </div>)
}
export default Footer;

