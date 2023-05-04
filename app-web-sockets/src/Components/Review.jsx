import React from 'react';
import { getReviews } from '../Redux/actions';
import { useDispatch, useSelector } from "react-redux";
import styles from './Review.module.css';
import {io} from 'socket.io-client'

const socket = io('http://localhost:3000')

const Review = (prop) => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews);
  React.useEffect(() => {
    socket.open =  () =>{
      console.log('Conectado al socket');
    }
    socket.on('message', (data) =>{
      console.log(data);
    })

    dispatch(getReviews(prop.id))
  }, [dispatch, prop.id])

  return (
    <>
      <h1 className={styles.paragraph}>COMENTARIOS DE LA PELICULA</h1>
      <ul>
        {Array.isArray(reviews)  && reviews.map((review, index) => (
          <li key={index}>
            <p className={styles.p}>Comentario: {review}</p>
            <p className={styles.p}>Recomendada: positivo, negativo o neutro</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Review
