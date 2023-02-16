import { useState, useEffect } from "react";
import { useParams, Outlet, Link, useNavigate} from "react-router-dom";
import css from '../MovieDetails/MovieDetails.module.css'
import * as FilmsAPI from '../../Api/ApiMovie'

export const MovieDetails = () => {
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [detailsForFilms, setDetailsForFilms] = useState([]);

  useEffect(() => {


      FilmsAPI.getFilmsById(movieId).then(setDetailsForFilms) 
  ;
  }, [movieId]);

    
    const backPage = () => {
        navigate(-1)
    }
   
    
    // console.log(detailsForFilms);
    let genres = detailsForFilms.genres
  return (
    <>
      
      <button className={css.button} type='button' onClick={backPage}>Back</button>
      {!detailsForFilms.status ? <div style={{
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>  We dont have any information about this Movie, try to find another one </div> :
            <div className={css.container}>
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
    </div>}
    
      {detailsForFilms.status &&
        <div>
          <ul className={css.option}  >

          <li>
              <Link className={css.link} to="cast">Cast</Link>
          </li>
          <li>
          <Link className={css.link} to="reviews">Reviews</Link>
          </li>
        </ul>
          <Outlet />
        </div>}
    
  
    </>
    
     
    
  )
};