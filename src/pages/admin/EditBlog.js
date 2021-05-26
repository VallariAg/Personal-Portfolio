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
    const [imgHead, setImgHead] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [body, setBody] = useState("")
    const [update_blogs] = useMutation(UpdatePostQuery);


    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(body);

                update_blogs({ variables: { title, body, description, id: parseInt(id), imgHead } });
                setTitle("");
                setBody("");
                setDescription("");
                setImgHead("");
            }
            }>
                <div style={formStyle}>

                Header Image: <input style={inputStyle} type="text" value={imgHead} onChange={(e) => setImgHead(e.target.value)} />
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
mutation MyQuery($id: Int, $title: String, $body: String, $description: String, $imgHead: String) {
  update_blogs(where: {id: {_eq: $id}}, _set: {body: $body, description: $description, imgHead: $imgHead, title: $title}) {
    returning {
      id
      createdAt
      title
    }
  }
}

`
