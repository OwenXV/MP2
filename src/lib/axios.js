import axios from "axios"


const fetchData = axios.create({
    baseURL: 'https://imdb-api.com/en/API'
});

export default fetchData