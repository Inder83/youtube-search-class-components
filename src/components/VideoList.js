import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({list}) => {

    const renderedList = list.map( item => {
        return <VideoItem key={item.id.videoId} video={item}/>
    });

    return (
        <div>{renderedList}</div>
    );
};

export default VideoList;