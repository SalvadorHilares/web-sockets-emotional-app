import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id, title, poster_path}) => {
  const url = `	https://image.tmdb.org/t/p/original/${poster_path}`
  return (
    <div key={id}>
      <h1>{title}</h1>
      <img alt={poster_path} src={url}></img>
      <Link to={`/movie/${id}`}>Ver Detalles</Link>
    </div>
  )
}

export default Card;