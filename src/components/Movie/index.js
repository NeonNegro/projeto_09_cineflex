import { Link} from 'react-router-dom';
import './style.css'
export default function Movie({movie}){


    return (
        <div className='movie-container'>
            <Link to={`/sessoes/${movie.id}`}>
            <img src={movie.posterURL} alt='poster do filme'></img>
            </Link>
        </ div>
    )
}