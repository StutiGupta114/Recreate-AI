import axios from 'axios';

const KEY = 'AIzaSyBRZ9tAVkd4onUObM68B09qa-YRdLveoPA';

export async function getMediaData() {
    const response = await axios.get('/search', { 
        baseURL : 'https://www.googleapis.com/youtube/v3',
        params : {
            q : 'buildings',
            part : 'snippet',
            maxResults : 5,
            key : KEY
        }
    });
    //console.log(response.data.items);
    return response.data.items;
}