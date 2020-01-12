import React from 'react';
import Audio from './Audio';

const AudioList = ({audios}) => {
    const renderedList = audios.map((audio) => {
        return <Audio key = {audio.id} audio = {audio}/>;
    });

    return <div>{renderedList}</div>;
}

export default AudioList;