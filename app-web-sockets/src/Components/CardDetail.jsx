import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMoviesDetails } from '../Redux/actions';
import { Link, useParams } from 'react-router-dom';
import styles from './CardDetail.module.css';
import {ImArrowLeft} from 'react-icons/im';
import Review from './Review';
import Footer from './Footer';

const CardDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const movie = useSelector(state => state.movieDetails);

  React.useEffect(()=>{
    dispatch(getMoviesDetails(params.id))
  },[dispatch, params.id])

  return (
    <div className={styles.back}>
    <div className="container">
    <Link to='/'><ImArrowLeft className={styles.arrow}/></Link>
      <div className="row">
        <div className='col-6'>
          <h1 className={styles.paragraph}>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
        </div>
        <div className='col-sm-5 col-md-6 margin-top-500'>
          <h3 className={styles.paragraph}>Generos :</h3>
          {movie.genres && movie.genres.map((genre, index) => (
            <p className={styles.p} key={index}> - {genre.name}</p>
          ))}
          <h3 className={styles.paragraph}>Resumen : </h3>
          <p className={styles.p}>{movie.overview}</p>
          <h3 className={styles.paragraph}>Año de publicacion :</h3>
          <p className={styles.p}>{movie.release_date}</p>
          <h3 className={styles.paragraph}>Frase de la pelicula : </h3>
          <p className={styles.p}>{movie.tagline}</p>
        </div>
      </div>
      <Review key={movie.id} id={movie.id}/>
    </div>
    <Footer/>
    </div>
  )
}

export default CardDetail