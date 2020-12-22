import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Pagination from './components/Pagination';
import data from './data.js';
const API = data;

console.log("inside handleGetJson");


  
function App() {
  const [movies, setMovies] = useState([]);
  const [search , setSearch] = useState('');
  const [currentPage , setCurrentPage] = useState(1);
  const [moviesPerPage , setMoviesPerPage] = useState(12);
  useEffect(async () => {
    fetch(`${API}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
  
    })
    .then((response) => response.json())
    .then(setMovies(data)); 
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
            <Movie key={item.id} posts={currentPage} {...item} id={item.id} />
          ))
        }
        <Pagination moviesPerPage={moviesPerPage} paginate={paginate} totalPosts={movies.length}></Pagination>
      </div>
    </div>
  );
}

export default App;
