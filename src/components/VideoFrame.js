import React from "react";

const VideoFrame = (props) => {
    if(!props.videoSource) {
        return <div>Search and choose Video!</div>
    }
    return (
        <div>
            <iframe title={props.videoTitle} src={`https://www.youtube.com/embed/${props.videoSource}`}></iframe>
        </div>
    );
}

export default VideoFrame;