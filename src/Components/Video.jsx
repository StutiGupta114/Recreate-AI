import React from 'react';
import '../Style/MainStep.css'

const Video = (props) => {
    return (
        <div draggable className = "video-item item" onDragStart = {(e) => {props.onDragStart(e, props.video)}}>
            <img className = "ui image" src={props.video.snippet.thumbnails.medium.url} />
            <div className = "content">
                <div className = "header">{props.video.snippet.title}</div>
            </div>
        </div>
    );
}

export default Video;