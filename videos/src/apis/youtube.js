import axios from 'axios';

// const KEY = 'AIzaSyDtaeGfC-PrrgCrvCv8thmkdd26FAl3VHI';

export default  axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
    // params: {
    //     part: 'snippet',
    //     maxResults: 5,
    //     key: KEY
    // }
});