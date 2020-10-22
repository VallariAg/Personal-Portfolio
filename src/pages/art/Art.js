import React, { useEffect } from "react";
import "./Art.css";
import girl from "./girl.png";

import { Dialog } from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';

const artServerURL = process.env.REACT_APP_SERVER_URL + "/art/";

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

    let { loading, error, data } = useQuery(ArtPOstQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>



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
                {
                    data.getArtPosts.map((fileName) => {
                        let imgURL = artServerURL + fileName;
                        return <img className="image" id={fileName} src={imgURL} onClick={() => handleClickOpen(imgURL)} />
                    })
                }
                <ArtDialog image={selectedImage} open={open} onClose={handleClose} />
            </div>
        </div>
    )

}


export default Art;

const ArtPOstQuery = gql`
query getArtPosts {
    getArtPosts
}
`;
