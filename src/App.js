import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Pagination from './components/Pagination';

const API = "http://api.tvmaze.com/shows?page=1";



  
function App() {
  const [movies, setMovies] = useState([]);
  const [search , setSearch] = useState('');
  const [currentPage , setCurrentPage] = useState(1);
  const [moviesPerPage , setMoviesPerPage] = useState(12);
  useEffect(async () => {
    fetch(API).then(res => res.json())
      .then((data) => {
        setMovies(data);
        console.log(data[100]);
       
      })



  }, [])
  const indexofLastMovies = currentPage * moviesPerPage;
  const indexOfFirstMovies = indexofLastMovies - moviesPerPage;
  const currentPages = movies.slice(indexOfFirstMovies,indexofLastMovies);

  // Change Page 
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
   let filterSearch = currentPages.filter(item => {
   return item.name.toLowerCase().includes( search.toLowerCase() );
  })
  return (
    <div className="container">
    
      <input className="form-control mb-5 mt-2" type="text" placeholder="Search Movie ..."  onChange={e => setSearch(e.target.value)}/>

      <div className="row">
        {
         filterSearch.map((item, index) => (
            <Movie key={index} posts={currentPage} {...item} id={index} />
          ))
        }
        <Pagination moviesPerPage={moviesPerPage} paginate={paginate} totalPosts={movies.length}></Pagination>
      </div>
    </div>
  );
}

export default App;
