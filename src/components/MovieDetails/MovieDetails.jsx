import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as FilmsAPI from '../../Api/ApiMovie'

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [detailsForFilms, setDetailsForFilms] = useState([]);

  useEffect(() => {
     
      FilmsAPI.getFilmsById(movieId).then(setDetailsForFilms);
  }, [movieId]);
    
   
    
    console.log(detailsForFilms);
    let genres = detailsForFilms.genres
    return <div>
         <img width='300' src={`https://image.tmdb.org/t/p/w780${
            detailsForFilms.poster_path}`} alt={detailsForFilms.title} />
        <b>{detailsForFilms.title} ({Number.parseInt(detailsForFilms.release_date)})</b>
        <p>User Score: {detailsForFilms.vote_average * 10}%</p>
        <b>Overview</b>
        <p>{detailsForFilms.overview}</p>
        <b>Genres</b>
        <ul>
           {genres && genres.map((genre) => (
          <li key={genre.id}>
            {genre.name}
          </li>
        ))}
        </ul>
    </div>
    
    
};