import * as FilmsAPI from '../../Api/ApiMovie'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from '../Reviews/Review.module.css'

export const Reviews = () => {
     const { movieId } = useParams();
    const [reviewsFilm, setReviewsFilm] = useState([]);

     useEffect(() => {
     
      FilmsAPI.getReviewFilm(movieId).then(setReviewsFilm);
  }, [movieId]);

    console.log(reviewsFilm);
  return (
    <div className={css.contsiner}>
          {reviewsFilm.length > 0 ?  <ul>
              {reviewsFilm.map((review) => (
          <li  key={review.id}>
                <p className={css.author}>{review.author}</p>
                <p className={css.text}>Character: {review.content}</p>
          </li>
        ))}
         </ul> : <div style={{
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>We dont have any information about it</div>
         }
    </div>
  );
};

