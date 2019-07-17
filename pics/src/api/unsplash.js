import axios from 'axios';

// const searchImages = (term) => {};

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3effb0fb53d8423ef4980ae8301ca4362e6523dc9d6a56c980f23fc0debccd79'
    }
});