import { Link } from 'react-router-dom'
import styles from './Card.module.css'

const Card = ({id, title, poster_path}) => {
  const url = `	https://image.tmdb.org/t/p/original/${poster_path}`
  return (
    <li key={id} className={styles.Card}>
      <img alt={poster_path} src={url} className={styles.image}></img>
      <h2 className={styles.h2}>{title}</h2>
      <Link to={`/movie/${id}`} className={styles.link}>Ver Detalles</Link>
    </li>
  )
}

export default Card;