import axios from "axios";

//Base Url API https://api.themoviedb.org/3/

// url Da API https://api.themoviedb.org/3/movie/now_playing?api_key=ff0504200a78da23c655314ba2f1fa3a

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
