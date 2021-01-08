import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Movie from "./Movie";
import HistoryMovies from "./HistoryMovie";
const parse = require("html-react-parser");

const MovieDetails = ({ movies }) => {
  let { slug } = useParams();

  let movie = movies.filter((item) => item.id === Number(slug));

  let category = movie[0].genres[0];
  let recommedMovies = movies.filter(
    (item) => item.genres.includes(category) && item.id !== Number(slug)
  );
  recommedMovies = recommedMovies.slice(0, 10);
  console.log(recommedMovies);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  let history = useHistory();
  function handleClick() {
    history.goBack();
  }
  console.log(history);
  return (
    <>
      <div className="container">
        <div className="row">
          {movie.map((item) => (
            <>
              <div className="col-12 text-white">
                <nav aria-label="breadcrumb" className="my-3">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      className="breadcrumb-item active text-white"
                      aria-current="page"
                    >
                      {item.name}
                    </li>
                  </ol>
                </nav>
                <hr></hr>

                <img
                  src={item.image.original}
                  className="rounded mx-auto d-block movie-image"
                  alt="..."
                />
                <button
                  onClick={handleClick}
                  type="button"
                  class="btn btn-warning"
                >
                  Go Back
                </button>
                <h1 className="text-center pt-5">{item.name}</h1>
                <p className="fs-4 pt-5">{parse(item.summary)}</p>
              </div>
              <div className="col-3 text-info fs-5   ">
                Premiered :{item.premiered}
              </div>
              {item.status === "Ended" ? (
                <div className="col-3  fs-5  text-danger">
                  Status :{item.status}{" "}
                </div>
              ) : (
                <div className="col-3  fs-5  text-success">
                  Status :{item.status}
                </div>
              )}
            </>
          ))}
          <div className="col-3 text-white">
            {movie[0].genres.map &&
              movie[0].genres.map((item) => (
                <button type="button" className="btn btn-outline-primary ms-3">
                  {item}
                </button>
              ))}
          </div>
          <div className="row mt-5">
            <h2 className="text-white text-center">Recommended Movies</h2>
            {recommedMovies.map((item, index) => (
              <Movie
                key={item.id}
                posts={recommedMovies}
                {...item}
                id={item.id}
              />
            ))}
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-12">
              <h3 className="text-white text-center">History Movies</h3>
              <HistoryMovies></HistoryMovies>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
