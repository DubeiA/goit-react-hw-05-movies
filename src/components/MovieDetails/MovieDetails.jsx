import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from '../MovieDetails/MovieDetails.module.css'

import * as FilmsAPI from '../../Api/ApiMovie'

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [detailsForFilms, setDetailsForFilms] = useState([]);

  useEffect(() => {
     
      FilmsAPI.getFilmsById(movieId).then(setDetailsForFilms);
  }, [movieId]);
    
   
    
    console.log(detailsForFilms);
    let genres = detailsForFilms.genres
    return <div className={css.container}>
        {detailsForFilms.poster_path && <img className={css.movie_pic } width='360' src={`https://image.tmdb.org/t/p/w780${
            detailsForFilms.poster_path}`} alt={detailsForFilms.title} />}
        <div className={css.second_container}>
            <b className={css.title}>{detailsForFilms.title} ({Number.parseInt(detailsForFilms.release_date)})</b>
        <p className={css.user_score}>User Score: {detailsForFilms.vote_average * 10}%</p>
        <b className={css.overview}>Overview</b>
        <p className={css.overview_text}>{detailsForFilms.overview}</p>
        <b className={css.genres}>Genres</b>
        <ul className={css.genres_list}>
           {genres && genres.map((genre) => (
          <li className={css.genres_padding_list} key={genre.id}>
            {genre.name}
          </li>
        ))}
        </ul>
        </div>
    </div>
    
    
};