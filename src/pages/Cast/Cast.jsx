import * as FilmsAPI from '../../Api/ApiMovie'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import image from '../../images/Person-Outline-coloring-page.jpg'

export const Cast = () => {
     const { movieId } = useParams();
    const [castFilm, setCastFilm] = useState([]);

     useEffect(() => {
     
      FilmsAPI.getCastFilm(movieId).then(setCastFilm);
  }, [movieId]);

    const imageError = (pic) => { 

        console.log(pic);
        if (pic) {
          return `https://image.tmdb.org/t/p/w780${pic}`
        }
       return image }
    
    console.log(castFilm);
  return (
    <div>
         {!castFilm ? <div> We dont have an information </div> :  <ul style={{
                  padding: 109,
    display: "flex",
    gap: 49,
    flexWrap: "wrap",
          }}>
             {castFilm.map((cast) => (
          <li  key={cast.credit_id}>
                     <img width={290} height={380} src={imageError(cast.profile_path)}
                         alt={cast.name} />
                     <p>{cast.name}</p>
                     <p>Character: {cast.character}</p>
          </li>
        ))}
                  
              
        </ul>}
      
    </div>
  );
};