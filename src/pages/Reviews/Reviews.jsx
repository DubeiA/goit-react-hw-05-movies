import * as FilmsAPI from '../../Api/ApiMovie';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import css from '../Reviews/Review.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsFilm, setReviewsFilm] = useState([]);
  const location = useLocation();
  useEffect(() => {
    FilmsAPI.getReviewFilm(movieId).then(setReviewsFilm);
  }, [movieId]);

  return (
    <div className={css.contsiner}>
      {reviewsFilm.length > 0 ? (
        <ul>
          {reviewsFilm.map(review => (
            <li key={review.id}>
              <p className={css.author}>{review.author}</p>
              <p className={css.text}>Character: {review.content}</p>
            </li>
          ))}
          <Link state={{ from: location }}></Link>
        </ul>
      ) : (
        <div className={css.error_message}>
          We dont have any information about it
        </div>
      )}
    </div>
  );
};

export default Reviews;
