import React from 'react';
import { getReviews } from '../Redux/actions';
import { useDispatch, useSelector } from "react-redux";
import styles from './Review.module.css';

const Review = (prop) => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews);
  React.useEffect(() => {
    dispatch(getReviews(prop.id))
  }, [dispatch, prop.id])
  
  return (
    <>
      <h1 className={styles.paragraph}>COMENTARIOS DE LA PELICULA</h1>
      <ul>
        {Array.isArray(reviews)  && reviews.map((review) => (
          <li key={review.id}>
            <p>Usuario    : {review.author}</p>
            <p>Comentario : {review.content}</p>
            <p>Recomendada: positivo, negativo o neutro</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Review
