import { Routes, Route } from "react-router-dom";
// import SearchFilms from "pages/films/SearchFilms";
import { Movie } from '../pages/Movie'
import { Home } from "pages/Home/Home";
import { MovieDetails } from '../components/MovieDetails/MovieDetails'


import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}/>
        </Route>
        {/* <Route path="/about" element={<Movies/>} /> */}
        {/* <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
