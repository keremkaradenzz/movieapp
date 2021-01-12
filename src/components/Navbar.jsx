import React,{ useEffect, useState} from "react";
import {Link} from "react-router-dom";


function Navbar({movies}) {

  const [navs, setNavs] = useState([])

  useEffect(() => {
    let arr = []
    movies.map(item => arr.push(...item.genres))
    setNavs([...new Set(arr)])
  },[])
 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-3 pb-3">
  <div className="container">
    <Link className="navbar-brand" to="/">TV Series</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
     
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {
              navs.map(item =><Link className="dropdown-item" to={`/category/${item}`}>{item}</Link> )
            }
            
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">About</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  );
}

export default Navbar;
