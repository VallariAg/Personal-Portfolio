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
  const [title, setTitle] = useState("")
  const [id, setId] = useState("")
  const [description, setDescription] = useState("")
  const [body, setBody] = useState("")
  const [insert_blogs, { _ }] = useMutation(CreatePostQuery);

  return (
    <div>
      <form onSubmit={(e) => {
        console.log(body);
        e.preventDefault();
        insert_blogs({ variables: { title, body, description, id: parseInt(id) } });
        setTitle("");
        setBody("");
        setDescription("");
      }
      } >
        <div style={formStyle}>
          Id: <input style={inputStyle} type="text" value={id} onChange={(e) => setId(e.target.value)} />
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
mutation MyQuery($title: String, $body: String, $description: String, $id: Int) {
  insert_blogs(objects: {body: $body, id: $id, title: $title, description: $description}) {
    returning {
      createdAt
      description
      title
    }
  }
}

`
