import axios from 'axios'
const getAllAlbum = () => {
    let dataUrl = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5";
    return axios.get(dataUrl);
}
export default {
    getAllAlbum
}