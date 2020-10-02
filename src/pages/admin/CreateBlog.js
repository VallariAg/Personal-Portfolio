import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";


function CreateBlog() {
    // const [ID, setID] = useState()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [body, setBody] = useState("")
    const [addPost, { data }] = useMutation(CreatePostQuery);

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                addPost({ variables: { title, body, description } });
                setTitle("");
                setBody("");
                setDescription("");
            }
            }>
                {/* <input type="text" value={id} /> */}
                Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                Description: <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                Body: <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
                <button type="submit">Create Post!</button>
            </form>
        </div>)
}

export default CreateBlog;

const CreatePostQuery = gql`
mutation addPost($title: String!, $body: String!, $description: String!) {
  createPost(title: $title, body: $body, description: $description) {
    id
    title
    createdAt
  }
}
`
