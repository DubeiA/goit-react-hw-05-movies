import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from '../Home/Home.module.css';

import * as FilmsAPI from '../../Api/ApiMovie';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    FilmsAPI.getTrendingFilms().then(setTrendingFilms);
  }, []);

  return (
    <>
      <ul className={css.home_styled_ul}>
        {trendingFilms.map(trendingFilm => (
          <li className={css.list_home} key={trendingFilm.id}>
            <Link
              className={css.home_link}
              to={`/movies/${trendingFilm.id}`}
              state={{ from: location.pathname }}
            >
              <img
                className={css.home_img}
                width={420}
                src={`https://image.tmdb.org/t/p/w780${trendingFilm.poster_path}`}
                alt={trendingFilm.title}
              />
              {trendingFilm.title} {trendingFilm.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
