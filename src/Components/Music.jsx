import React from 'react';
import axios from 'axios';
import Audio from './Audio';
import AudioList from './AudioList';
import '../Style/MainStep.css'

class Music extends React.Component {

    state = {
        audiofiles: []
    }

    async componentDidMount() {
        console.log('mounted');
        const response = await axios.get('/top', {
            baseURL: 'https://api.napster.com/v2.1/tracks',
            params: {
                apikey: 'ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm',
            }
        });
        console.log(response);
        this.setState({ audiofiles: response.data.tracks })
    }

    render() {
        return (
            <div className='content-box'>
                <AudioList audios={this.state.audiofiles} />
            </div>
        );
    }
}

export default Music;