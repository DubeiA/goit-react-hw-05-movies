import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as FilmsAPI from "../Api/ApiMovie";

export const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    FilmsAPI.getTrendingFilms().then(setTrendingFilms);
  }, []);

  return (
    <>
      <ul>
        {trendingFilms.map((trendingFilm) => (
          <li key={trendingFilm.id}>
            <Link to={`/movies/${trendingFilm.id}`}><img width={300} src={`https://image.tmdb.org/t/p/w780${
            trendingFilm.poster_path}`} alt={trendingFilm.title} />{trendingFilm.title} {trendingFilm.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};