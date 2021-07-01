import axios from "axios";

//base url that pulls requests from tmdb 
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3", 
})

export default instance; 