import React, { useState } from "react";
import crypto from "crypto";
import { useQuery, gql } from '@apollo/client';
import CreateBlog from "./CreateBlog";
import EditBlog from "./EditBlog";



function verfiyPassword(input_password, real_password) {
    const hash = crypto.createHash('sha256');
    input_password = hash.update(input_password).digest("hex");
    return input_password == real_password;
}

function Admin() {
    const { loading, error, data } = useQuery(passwordQuery);
    const [loggedIn, setloggedIn] = useState(false);
    let [password, setpassword] = useState("");

    if (loading) return <p>Loading server...</p>;
    if (error) return <p>Error in loading server!</p>

    const real_password = data.getPassword;


    if (!loggedIn) {
        return (
            <form onSubmit={(e) => { e.preventDefault(); if (verfiyPassword(password, real_password)) { setloggedIn(true); } }}>
                <label>
                    Password:
                    <input type="password"
                        name="password"
                        value={password}
                        onChange={(event) => setpassword(event.target.value)}
                    />
                </label>
                <button type="submit">Log in</button>
            </form>
        )
    }
    else {
        return (
            <div styel={{ display: "flex", flexDirection: "column" }}>
                <h1>Create Blog Post</h1>
                <CreateBlog />
                <h1>Update existing blog Post</h1>
                <EditBlog />
            </div>
        )
    }
}

export default Admin;

const passwordQuery = gql`
{
  getPassword
}
`
