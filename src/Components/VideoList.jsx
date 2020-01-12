import React from 'react';
import Video from './Video';

const VideoList = (props) =>{
    const renderedList = props.videos.map((video) => {
        return <Video key = {video.id.videoId} video = {video} onDragStart = {props.onDragStart}/>;
    });

    return <div className = "ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;