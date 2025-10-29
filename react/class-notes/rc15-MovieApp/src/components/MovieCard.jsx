import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({id,title, overview,poster_path, vote_average}) => {
const navigate=useNavigate()
  
  return (
    <div
     
      className="movie"
      id="container"
    >
      {/* img için base adrese endpoint olaraka dizideki poster_path eklenecek */}
      <img

      onClick={()=>navigate("/details/"+id)}
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt=""
      />

      <div className="flex align-baseline justify-between p-1 text-white">
        <h5>{title} </h5>
        <span
          className={vote_average>7 ? "tag green" : vote_average >6.5 ? "tag orange" : "tag red"}
        >
          {vote_average.toFixed(2)}
        </span>
      </div>

      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview} </p>
      </div>
    </div>
  );
}

export default MovieCard