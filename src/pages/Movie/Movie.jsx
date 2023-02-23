import { useState, useEffect } from 'react';
import MovieSearch from 'components/Searchbar/Searchbar';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import * as FilmsAPI from '../../Api/ApiMovie';
import css from '../Home/Home.module.css';
import image from '../../images/film-plug.webp';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmsByQuery, setFilmsByQuery] = useState([]);
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const submitForm = params => {
    setSearchParams(params !== '' ? { query: params } : {});
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    FilmsAPI.getFilmsByQuery(query).then(setFilmsByQuery);
  }, [query]);

  const poster = poster => {
    if (!poster) {
      return image;
    }

    return `${IMAGE_URL}${poster}`;
  };

  return (
    <>
      <MovieSearch onSubmit={submitForm} />

      {filmsByQuery && (
        <ul className={css.home_styled_ul}>
          {filmsByQuery.map(film => (
            <li className={css.list_home} key={film.id}>
              <Link
                className={css.home_link}
                to={`/movies/${film.id}`}
                state={{ from: location }}
              >
                <img
                  className={css.home_img}
                  width={420}
                  src={poster(film.poster_path)}
                  alt={film.title}
                />
                {film.title} {film.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movie;
