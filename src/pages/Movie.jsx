import { useState, useEffect } from "react"
import MovieSearch from "components/Searchbar/Searchbar";
import { Link, useSearchParams } from "react-router-dom";
import * as FilmsAPI from "../Api/ApiMovie";
import css from '../pages/Home/Home.module.css'

export const Movie = () => { 
    const [searchParams, setSearchParams] = useSearchParams();
    const [filmsByQuery, setFilmsByQuery] = useState([])
    const query = searchParams.get('query') ?? ''

     const submitForm = params => {
    setSearchParams(params !== '' ? { query: params } : {})
    
  }

    useEffect(() => {
        if (query === '') {
        return 
      
        }
        FilmsAPI.getFilmsByQuery(query).then(setFilmsByQuery)
    }, [query])
    
    console.log(filmsByQuery);

    return (
        <>
         <MovieSearch onSubmit={submitForm}/>
        
         
       {filmsByQuery && <ul className={css.home_styled_ul }>
        {filmsByQuery.map((film) => (
          <li className={css.list_home } key={film.id}>
            <Link className={css.home_link} to={`/movies/${film.id}`}><img className={ css.home_img} width={420} src={`https://image.tmdb.org/t/p/w780${
            film.poster_path}`} alt={film.title} />{film.title} {film.name}</Link>
          </li>
        ))}
            </ul>}
        </>
    
       
    )
}