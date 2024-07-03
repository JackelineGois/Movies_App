import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import "./style.css";
import { toast } from "react-toastify";

function Movies() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadingDescriptions() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: "ff0504200a78da23c655314ba2f1fa3a",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Not Found");
          navigate("/", { replace: true });
          return;
        });
    }
    loadingDescriptions();
  }, [navigate, id]);

  if (loading) {
    return <h1>Loading... </h1>;
  }

  function saveFavoritesMovies() {
    const movieSaved = movie;

    let savedMovies = JSON.parse(localStorage.getItem("@primeFlix"));

    if (!Array.isArray(savedMovies)) {
      savedMovies = [];
    }

    const isMovieSaved = savedMovies.some(
      (savedMovie) => savedMovie.id === movieSaved.id
    );

    if (isMovieSaved) {
      toast.warn("This film has already been saved");
      return;
    }

    savedMovies.push(movieSaved);
    localStorage.setItem("@primeFlix", JSON.stringify(savedMovies));

    toast.success("Movie saved successfully");
    navigate("/favorites", { replace: true });
  }

  return (
    <div className="container-info">
      <div className="movie-info">
        <div className="display">
          <h1>{movie.original_title}</h1>
          <a href="/"> Back</a>
        </div>

        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
        />
        <h3>Average: {movie.vote_average.toFixed(1)}/10 </h3>
        <h2>Sinopse</h2>
        <span>{movie.overview} </span>
        <div className="buttons">
          <button onClick={saveFavoritesMovies}>Save</button>
          <button>
            <a
              href={`https://youtube.com/results?search_query=${movie.title} Official Trailer`}
              target="blank"
              rel="noopener noreferrer"
            >
              Trailer{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movies;
