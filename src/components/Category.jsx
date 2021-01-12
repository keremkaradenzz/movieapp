import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import Heart from "./Heart";

function Category({ movies }) {
  const [data, setData] = useState({});
  let { categoryName } = useParams();

  useEffect(() => {
    setData(movies.filter((item) => item.genres.includes(categoryName)));
  }, [categoryName]);

  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <h3 className="text-white mb-5 mt-5 text-center">Category {categoryName}</h3>
        {data.length>0 ? data.map((item) => {
          return (
            <div className="col-md-3 mb-5">
              <div className="card">
                <img
                  src={item.image.medium !== null ? item.image.medium : "#"}
                  className="card-img-top movies-image"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {item.name}
                    <Heart id={item.id} />
                  </h5>

                  <div
                    className="btn-group btn-group-sm"
                    role="group"
                    aria-label="..."
                  >
                    {item.genres.map((item) => (
                      <button type="button" className="btn btn-outline-primary">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div
                  className="overflow-auto p-3 mb-3 mb-md-0 me-md-3 bg-light"
                  style={{ maxHeight: "150px" }}
                >
                  <Link to={`/movie/${item.id}`}>Details</Link>
                </div>
              </div>
            </div>
          );
        }): null}
      </div>
    </div>
  );
}

export default Category;
