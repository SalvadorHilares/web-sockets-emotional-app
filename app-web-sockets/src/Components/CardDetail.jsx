import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMoviesDetails } from '../Redux/actions';
import { Link, useParams } from 'react-router-dom';
import Review from './Review';

const CardDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const movie = useSelector(state => state.movieDetails);

  React.useEffect(()=>{
    dispatch(getMoviesDetails(params.id))
  },[dispatch, params.id])

  return (
    <>
      <Link to='/'>Home</Link>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
      <h3>Generos :</h3>
      {movie.genres && movie.genres.map((genre, index) => (
        <p key={index}>{genre.name}</p>
      ))}
      <p>{movie.overview}</p>
      <Review key={movie.id} id={movie.id}/>
    </>
  )
}

export default CardDetail