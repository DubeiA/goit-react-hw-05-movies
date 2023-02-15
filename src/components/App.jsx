import { Routes, Route } from "react-router-dom";
// import SearchFilms from "pages/films/SearchFilms";
import { Movie } from '../pages/Movie'
import { Home } from "pages/Home/Home";
import { Cast } from "pages/Cast/Cast";
import { MovieDetails } from './MovieDetails/MovieDetails'


import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movie />} />
            
            {/* <Route path="reviews" element={ <>Reviews</>} /> */}
          
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>} />
          </Route>
        </Route>
        {/* <Route path="/about" element={<Movies/>} /> */}
        {/* <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
