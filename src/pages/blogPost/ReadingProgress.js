import React, { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import "./BlogPost.css";

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 5,
        borderRadius: 5,
        position: "sticky",
        top: 0
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: 'black',
    },
}))(LinearProgress);

const ReadingProgress = ({ target }) => {
    const [readingProgress, setReadingProgress] = useState(0);
    const scrollListener = () => {
        if (!target.current) {
            return null;
        }

        const element = target.current;
        const totalHeight = element.clientHeight - element.offsetTop - (window.innerHeight);
        const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (windowScrollTop === 0) {
            return setReadingProgress(0);
        }

        if (windowScrollTop > totalHeight) {
            return setReadingProgress(100);
        }

        setReadingProgress((windowScrollTop / totalHeight) * 100);
        return null;
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollListener);
        return () => window.removeEventListener("scroll", scrollListener);
    });
    return (<div className="sticky-progress BlogPost">
        <BorderLinearProgress className="sticky-progresss" variant="determinate" value={readingProgress} />
    </div>)
};

export default ReadingProgress;
