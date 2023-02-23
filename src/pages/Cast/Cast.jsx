import * as FilmsAPI from '../../Api/ApiMovie';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import image from '../../images/Person-Outline-coloring-page.jpg';
import css from '../Cast/Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [castFilm, setCastFilm] = useState([]);

  useEffect(() => {
    FilmsAPI.getCastFilm(movieId).then(setCastFilm);
  }, [movieId]);

  const imageError = pic => {
    if (pic) {
      return `https://image.tmdb.org/t/p/w780${pic}`;
    }
    return image;
  };

  return (
    <div>
      {castFilm.length < 1 ? (
        <div className={css.error_message}> We dont have any information </div>
      ) : (
        <ul className={css.list_style}>
          {castFilm.map(cast => (
            <li key={cast.credit_id}>
              <img
                width={290}
                height={380}
                src={imageError(cast.profile_path)}
                alt={cast.name}
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
