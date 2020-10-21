import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const formStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    margin: "0% 20% 0% 10%",
    justifyItems: "right",
}
const inputStyle = {
    justifySelf: "left",
    width: "80%",
    marginLeft: "3%"
}
function EditBlog() {
    const [id, setID] = useState(0)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [body, setBody] = useState("")
    const [updatePost] = useMutation(UpdatePostQuery);


    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(body);

                updatePost({ variables: { title, body, description, id: parseInt(id) } });
                setTitle("");
                setBody("");
                setDescription("");
            }
            }>
                <div style={formStyle}>

                    ID: <input style={inputStyle} type="number" value={id} onChange={(e) => setID(e.target.value)} />
                Title: <input style={inputStyle} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                Description: <input style={inputStyle} type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                Body: <textarea style={inputStyle} value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button type="submit">Update Post!</button>

            </form>
        </div>)
}

export default EditBlog;

const UpdatePostQuery = gql`
mutation updatePost($id: Float!, $title: String!, $body: String!, $description: String!) {
    updatePost(id: $id ,title: $title, body: $body, description: $description) {
    id
    title
    createdAt
  }
}
`
