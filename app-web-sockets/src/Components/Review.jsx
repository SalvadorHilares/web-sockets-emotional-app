import React from 'react';
import { getReviews } from '../Redux/actions';
import { useDispatch, useSelector } from "react-redux";

const Review = (prop) => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews);
  React.useEffect(() => {
    dispatch(getReviews(prop.id))
  }, [dispatch, prop.id])
  return (
    <>
      <h1>COMENTARIOS DE LA PELICULA</h1>
      <ul>
        {Array.isArray(reviews)  && reviews.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Review
