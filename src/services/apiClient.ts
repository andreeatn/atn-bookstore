import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
    params:{
        key: API_KEY
    }
})

