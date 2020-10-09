import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({list, onItemClick}) => {

    const renderedList = list.map( item => {
        return <VideoItem key={item.id.videoId} video={item} onItemClick={onItemClick}/>
    });

    return (
        <div>{renderedList}</div>
    );
};

export default VideoList;