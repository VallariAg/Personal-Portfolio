import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";


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
                updatePost({ variables: { title, body, description, id: parseInt(id) } });
                setTitle("");
                setBody("");
                setDescription("");
            }
            }>
                ID: <input type="number" value={id} onChange={(e) => setID(e.target.value)} />
                Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                Description: <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                Body: <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
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
