import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MovieDetails from "./components/MovieDetails";
import Movie from "./components/Movie";
import Pagination from "./components/Pagination";
import data from "./data.js";
const API = data;



function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(12);
  useEffect(async () => {
    fetch(`${API}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(setMovies(data));
  }, []);
  const indexofLastMovies = currentPage * moviesPerPage;
  const indexOfFirstMovies = indexofLastMovies - moviesPerPage;
  const currentPages = movies.slice(indexOfFirstMovies, indexofLastMovies);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let filterSearch = movies.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log(currentPages);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <h1 className="text-center text-white mt-5 mb-5">TV Series</h1>
            <input
              className="form-control mb-5 mt-2"
              type="text"
              placeholder="Search Movie ..."
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="row">
              {search === ""
                ? currentPages.map((item, index) => (
                    <Movie
                      key={item.id}
                      posts={currentPage}
                      {...item}
                      id={item.id}
                    />
                  ))
                : filterSearch.map((item, index) => (
                    <Movie
                      key={item.id}
                      posts={currentPage}
                      {...item}
                      id={item.id}
                    />
                  ))}
            </div>
            <Pagination
              moviesPerPage={moviesPerPage}
              paginate={paginate}
              totalPosts={movies.length}
            ></Pagination>
          </div>
        </Route>
        <Route path="/movie/:slug">
          <MovieDetails movies={movies}></MovieDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
