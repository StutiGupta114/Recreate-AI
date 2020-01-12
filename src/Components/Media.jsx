import React from 'react';
import axios from 'axios';
import VideoList from './VideoList';
import '../Style/MainStep.css';

class Media extends React.Component {
    state = {
        videoFiles: []
    }

    async componentDidMount() {
        const response = await axios.get('/search', {
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: {
                q: 'buildings',
                part: 'snippet',
                maxResults: 10,
                key: 'AIzaSyBRZ9tAVkd4onUObM68B09qa-YRdLveoPA'
            }
        });
        //console.log(response);
        this.setState({ videoFiles: response.data.items })
    }

    render() {
        return (
            <div className='content-box'>
                <VideoList videos={this.state.videoFiles} onDragStart = {this.props.onDragStart}/>
            </div>
        );
    }
}

export default Media;