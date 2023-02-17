import { Routes, Route } from "react-router-dom";
import { Movie } from '../pages/Movie'
import { Home } from "pages/Home/Home";
import { Cast } from "./Cast/Cast";
import { MovieDetails } from '../pages/MovieDetails/MovieDetails'
import { Layout } from "./Layout/Layout";
import {Reviews} from './Reviews/Reviews'

export const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={ <Reviews/>} />
          </Route>
        </Route>
  
      </Routes>
    </div>
  );
};
