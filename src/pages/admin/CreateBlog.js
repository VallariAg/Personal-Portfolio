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

function CreateBlog() {
  // const [ID, setID] = useState()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [body, setBody] = useState("")
  const [addPost, { data }] = useMutation(CreatePostQuery);

  return (
    <div>
      <form onSubmit={(e) => {
        console.log(body);
        e.preventDefault();
        addPost({ variables: { title, body, description } });
        setTitle("");
        setBody("");
        setDescription("");
      }
      } >
        <div style={formStyle}>
          {/* <input type="text" value={id} /> */}
                Title: <input style={inputStyle} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                Description: <input style={inputStyle} type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                Body: <textarea style={inputStyle} value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
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
