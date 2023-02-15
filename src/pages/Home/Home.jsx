import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import css from '../Home/Home.module.css'

import * as FilmsAPI from "../../Api/ApiMovie";

export const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    FilmsAPI.getTrendingFilms().then(setTrendingFilms);
  }, []);

  return (
    <>
      <ul className={css.home_styled_ul }>
        {trendingFilms.map((trendingFilm) => (
          <li className={css.list_home } key={trendingFilm.id}>
            <Link className={css.home_link} to={`/movies/${trendingFilm.id}`}><img className={ css.home_img} width={420} src={`https://image.tmdb.org/t/p/w780${
            trendingFilm.poster_path}`} alt={trendingFilm.title} />{trendingFilm.title} {trendingFilm.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};