import React from 'react'
import  Heart from './Heart';
const parse = require('html-react-parser');
const Movie = ({ name, image, summary, genres,id }) => (

    <div className="col-md-3 mb-5" style={{ maxHeight: "60%" }}>
        <div className="card"  >
            <img src={image.medium !== null ? image.medium : "#"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"> {name}   
                <Heart id={id}/>
                   </h5>

                <div className="btn-group btn-group-sm" role="group" aria-label="...">
                {genres.map(item => <button type="button" className="btn btn-outline-primary">{item}</button>)}
    
                </div>
            </div>
            <div className="overflow-auto p-3 mb-3 mb-md-0 me-md-3 bg-light" style={{maxHeight:"150px"}}>
                {
                    parse(summary)
                }
            </div>


        </div>
    </div>
)

export default Movie

