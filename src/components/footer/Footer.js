import React from "react";
// icons
import twitter from "./media/twitter.svg";
import instagram from "./media/instagram.svg";
import github from "./media/github.svg";
import dribbble from "./media/dribble.svg";

let footer_style = {
    // background: "#bbb",
    // background: "#212121",
    // background: "#ebbcbc",
    // bottom: 0,
    flexShrink: 0,
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    padding: "1% 15% 0% 15%",
    margin: "0 auto",
    marginTop: "1px",
    width: "50%"
}
let icon_style = {
    // background: "#111",
    // borderRadius: "30%",
    // border: "5px",
    // padding: "1.5%",
    alignContent: "center",
    justifySelf: "center",
    height: "2vw",
    minHeight: "30px"
}
function Footer() {
    return (
        <>
            <div style={footer_style}>
                <a href="https://twitter.com/VallariAg" rel="noopener noreferrer" target="_blank">
                    <img style={icon_style} src={twitter} alt="twitter" />
                </a>
                <a href="https://www.instagram.com/vallariag/" rel="noopener noreferrer" target="_blank">
                    <img style={icon_style} src={instagram} alt="instagram" />
                </a>
                <a href="https://dribbble.com/VallariAg" rel="noopener noreferrer" target="_blank">
                    <img style={icon_style} src={dribbble} alt="dribbble" />
                </a>
                <a href="https://github.com/VallariAg" rel="noopener noreferrer" target="_blank">
                    <img style={icon_style} src={github} alt="github" />
                </a>
            </div>
            <p style={{ color: "grey" }}>Created by Vallari Agrawal | © 2020 All rights reserved.</p>
        </>)
}
export default Footer;

