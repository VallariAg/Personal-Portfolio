import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import { TimelineDot, TimelineOppositeContent, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import useViewport from "../../hooks/useViewport"
import './timeline.css';

function MoreDesc(descButton, description) {
    if (descButton === "more" || descButton === "") {
        return ""
    }
    else {
        return <p className="moreDesc">
            <ReactMarkdown
                source={description}
            />
        </p>
    }
}
function Block({ time, title, body, description, isSmallView }) {
    const [descButton, setdescButton] = useState("more");
    // if (description === "") {
    //     setdescButton("");
    // }
    return (<TimelineItem className="timline-item">
        {isSmallView ? "" :
            <TimelineOppositeContent className="timline-time">
                <Typography color="textSecondary" className="timline-time">{time}</Typography>
            </TimelineOppositeContent>
        }
        <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div>
                {isSmallView ? <Typography color="textSecondary">{time}</Typography> : ""}
                <h3>{title}</h3>
                <h4>{body}</h4>
                {MoreDesc(descButton, description)}
                <button
                    className="descButton"
                    onClick={() => { (descButton === "more") ? setdescButton("less") : setdescButton("more") }}>
                    {descButton}
                </button>
            </div>
        </TimelineContent>
    </TimelineItem>)
}
function Timelines() {
    let { width } = useViewport();
    const { loading, error, data } = useQuery(TimelineQuery)

    if (loading) return <p>Loading.. </p>
    if (error) return <p> Error! </p>

    return (
        <div className="Timeline">
            <div className="timelineHeader">
                <h1 className="pageHeader">Timeline </h1>
            </div>
            <Timeline align={width > 800 ? "alternate" : "left"}>
                {
                    data.timeline.map(({ id, title, body, time, description }) => {
                        let date = new Date(parseInt(time));
                        date = `${date.toLocaleString('default', { month: 'long' })} ${date.getUTCFullYear()}`
                        // let date = new Date(parseInt(time)).toDateString();
                        return <Block id={id} time={date} title={title} description={description} body={body} isSmallView={width < 800} />

                    })
                }
            </Timeline>
        </div>
    )
}


export default Timelines;


const TimelineQuery = gql`
query show {
    timeline {
    id
    time
    title
    body
    description
  }
}
`
