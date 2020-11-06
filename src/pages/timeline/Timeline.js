import React, { useState } from 'react';
import './timeline.css';
import { useQuery, gql } from '@apollo/client';

function MoreDesc(descButton, description) {
    if (descButton == "more" || descButton == "") {
        return ""
    }
    else {
        return <p className="moreDesc">{description}</p>
    }
}
function Block({ time, title, body, description }) {
    const [descButton, setdescButton] = useState("more");
    // if (description === "") {
    //     setdescButton("");
    // }
    return (
        <li>
            <div className="bullet pink"></div>
            <div className="time">{time}</div>
            <div className="body">
                <h3>{title}</h3>
                <h4>{body}</h4>
                {MoreDesc(descButton, description)}
                <button
                    className="descButton"
                    onClick={() => { (descButton == "more") ? setdescButton("less") : setdescButton("more") }}>
                    {descButton}
                </button>
            </div>
        </li>
    )
}
function Timeline() {
    const { loading, error, data } = useQuery(TimelineQuery)

    if (loading) return <p>Loading.. </p>
    if (error) return <p> Error! </p>

    return (
        <div className="Timeline">
            <div className="timelineHeader">
                <h1 className="pageHeader">Timeline </h1>
            </div>
            <div class="container">
                <div class="timeline">
                    <ul>
                        {
                            data.allContent.map(({ id, title, body, time, description }) => {
                                let date = new Date(parseInt(time)).toDateString();
                                return <Block id={id} time={date} title={title} description={description} body={body} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Timeline;


const TimelineQuery = gql`
query show {
    allContent {
    id
    time
    title
    body
    description
  }
}
`
