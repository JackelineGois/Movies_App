import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "ff0504200a78da23c655314ba2f1fa3a",
          page: 1,
        },
      });
      //console.log(response.data.results.slice(0, 10));

      setMovies(response.data.results.slice(0, 10));
      setLoading(false);
    }
    loadMovies();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Movies Loading... </h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="movies-list">
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.title} </strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <Link to={`/movies/${movie.id}`}>Access</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
