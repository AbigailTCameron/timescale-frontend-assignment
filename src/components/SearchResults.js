import React, { useState, useEffect } from "react";
import instance from "../axios";
import "./SearchResult.css";
import Popup from "./Popup";

const baseURL = "https://image.tmdb.org/t/p/original/";
function SearchResults({ fetchSearch }) {
  const [searchMovie, setSearchMovie] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [oneMovie, setOneMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const request = await instance.get(fetchSearch);
      setSearchMovie(request.data.results);
    }
    fetchMovie();
  }, [fetchSearch]);

  const handleClick = (movie) => {
    setOneMovie(movie);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`head ${isOpen && "head__blur"}`}>
        <div className="search__results">
          {searchMovie.map((movie) => (
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

export default SearchResults;
