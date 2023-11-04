import axios from "axios";

export default axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
    params:{
        key: 'AIzaSyB0HQy1eR2FRQMebqLzF95rCnQfdrA5bHs'
    }
})

