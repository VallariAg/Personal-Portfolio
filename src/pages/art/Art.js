import React, { useEffect } from "react";
import { Dialog } from '@material-ui/core';
// import draw from "./draw/1.png";
import sample from "./draw/sample.jpg";
import sample2 from "./draw/1.png"
import "./Art.css";
import girl from "./girl.png";



function ArtDialog(props) {
    const { image, open, onClose } = props
    return (
        <Dialog open={open} onClose={onClose}>
            <img className="dialog-img" src={image} />
        </Dialog>
    )
}

function Art() {
    const [open, setopen] = React.useState(false);
    const [selectedImage, setselectedImage] = React.useState("");


    const handleClickOpen = (image) => {
        setopen(true);
        setselectedImage(image);
    };

    const handleClose = () => {
        setopen(false);
        setselectedImage("");
    };

    return (
        <div>
            <div className="artHeader">
                <img className="icon-girl" src={girl} alt="icon-girl" />
                <h1 style={{ color: "#000" }}>art</h1>
            </div>
            <div className="art">
                <img className="image" src={sample} onClick={() => handleClickOpen(sample)} />
                <img className="image" src={sample2} onClick={() => handleClickOpen(sample2)} />
                <img className="image" src={sample} onClick={() => handleClickOpen(sample)} />
                <img className="image" src={sample2} onClick={() => handleClickOpen(sample2)} />
                <ArtDialog image={selectedImage} open={open} onClose={handleClose} />
            </div>
        </div>
    )

}


export default Art;
