import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const Home = lazy(() => import('../pages/Home/Home'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movie />} />
          <Route path="/goit-react-hw-05-movies/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={ <Reviews/>} />
          </Route>
        </Route>
  
      </Routes>
    </div>
  );
};
