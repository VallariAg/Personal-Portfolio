import React, { useState } from "react";
import "./Art.css";
import { Dialog } from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';


function ArtDialog(props) {
    const { image, open, onClose } = props
    return (
        <Dialog open={open} onClose={onClose}>
            <img alt="art" className="dialog-img" src={image} />
        </Dialog>
    )
}

function Art() {
    const [open, setopen] = useState(false);
    const [selectedImage, setselectedImage] = useState("");

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
                <h1 className="pageHeader">Art</h1>
            </div>
            <p style={{ color: "grey", textAlign: "center" }}> All art content can also be found on my Dribbble or Instagram accounts. </p>
            <div className="art-container">
                {
                    data.art.map((artPost) => {
                        let imgURL = artPost.link;
                        return <div className="art-item"><img className="img" alt={artPost.artTitle} id={artPost.artTitle} src={imgURL} onClick={() => handleClickOpen(imgURL)} /></div>
                    })
                }
                <ArtDialog image={selectedImage} open={open} onClose={handleClose} />
            </div>
        </div>
    )

}


export default Art;

const ArtPOstQuery = gql`
query MyQuery {
  art {
    link
    artTitle
  }
}
`;
