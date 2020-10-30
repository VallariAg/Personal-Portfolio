import React, { useEffect } from "react";
import "./Art.css";
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
                <h1 className="pageHeader">Art</h1>
            </div>
            <p style={{ color: "grey", textAlign: "center" }}> All art content can also be found on my Dribbble or Instagram accounts. </p>
            <div className="art-container">
                {
                    data.getArtPosts.map((fileName) => {
                        let imgURL = artServerURL + fileName;
                        return <div className="art-item"><img className="img" id={fileName} src={imgURL} onClick={() => handleClickOpen(imgURL)} /></div>
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
