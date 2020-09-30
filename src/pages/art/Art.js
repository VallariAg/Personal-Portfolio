import React from "react";
import { Dialog } from '@material-ui/core';
import sample from "./sample.jpg";
import "./Art.css";

function ArtDialog(props) {
    const { image, open, onClose } = props
    return (
        <Dialog open={open} onClose={onClose}>
            <img src={image} />
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
        // setSelectedValue(value);
    };

    return (
        <div className="art">
            <img className="image" src={sample} onClick={() => handleClickOpen(sample)} />
            <img className="image" src={sample} onClick={handleClickOpen} />
            <img className="image" src={sample} onClick={handleClickOpen} />
            <img className="image" src={sample} onClick={handleClickOpen} />
            <ArtDialog image={sample} open={open} onClose={handleClose} />
        </div>
    )

}

export default Art;
