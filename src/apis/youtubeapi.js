import axios from 'axios';
const KEY='AIzaSyBA3n3R4x3TvU6bg1NBfxLJRxqp03KqzPw';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:6,
        key:KEY
    },
});