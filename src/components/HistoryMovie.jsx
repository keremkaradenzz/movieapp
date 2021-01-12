import React, { useEffect, useState } from "react";
let arr = [];
const HistoryMovies = ({ movieHistory, movies }) => {
  let history = movieHistory.location.pathname.split("/");
  const movieData = movies.filter((item) => item.id === Number(history[2]));
  useEffect(() => {
    if (arr.length < 4) {
      arr.push(...movieData);
      arr.reverse();
    } else {
      arr.pop();
    }
  }, [movieData]);
  return (
    <>
      <div className="row ">
        {arr.map((item) => {  
          return (
            <div className="col-3">
              <div className="card movie-image">
                <img
                  src={item.image.medium}
                  className="card-img-top movie-image"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default HistoryMovies;
