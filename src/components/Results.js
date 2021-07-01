import React, { useState, useEffect } from "react";
import instance from "../axios";
import Popup from "./Popup";
import "./Results.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Results({ fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [oneMovie, setOneMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  const handleClick = (movie) => {
    setOneMovie(movie);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`head ${isOpen && "head__blur"}`}>
        <h1>Most Recent Movies</h1>

        <div className="movie__results">
          {movies.map((movie) => (
            <div
              className="movie"
              key={movie.id}
              onClick={() => handleClick(movie)}
            >
              <div className="vote">
                <h5>{movie.vote_average}</h5>
              </div>

              <img
                className="movie__poster"
                src={
                  `${baseURL}${movie.poster_path}` ||
                  `${baseURL}${movie.backdrop_path || movie.poster_path}`
                }
                alt={movie.original_title}
              />

              <div className="title">
                <h4>{movie.original_title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <Popup
          title={oneMovie.original_title}
          src={`${baseURL}${oneMovie.poster_path}`}
          alt={oneMovie.original_title}
          date={oneMovie.release_date}
          overview={oneMovie.overview}
          average={oneMovie.vote_average}
          vote__count={oneMovie.vote_count}
          handleClose={handleClick}
        />
      )}
    </div>
  );
}

export default Results;
