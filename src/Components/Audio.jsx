import React from 'react'

const Audio = (props) => {
    return (
        <div draggable >
            <audio controls>
                <source src={props.audio.previewURL} type="audio/ogg" />
            </audio>
            </div>
            );
        }
export default Audio;