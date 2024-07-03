import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = JSON.parse(localStorage.getItem("@primeFlix"));
    setMovies(myList);
  }, []);

  function deleteMovies(id) {
    let filterMovies = movies.filter((item) => {
      return item.id !== id;
    });
    setMovies(filterMovies);
    toast.success("Successfully deleted movie");

    localStorage.setItem("@primeFlix", JSON.stringify(filterMovies));
  }

  console.log(movies);
  return (
    <div className="my-movies">
      <h1>My Favorites Movies </h1>
      {movies.length === 0 ? (
        <h3> You haven't saved any movies yet</h3>
      ) : (
        <ul>
          {movies.map((item) => {
            return (
              <li key={item.id}>
                <span> {item.title}</span>
                <div>
                  <Link to={`/movies/${item.id}`}> Details </Link>
                  <button onClick={() => deleteMovies(item.id)}> Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
