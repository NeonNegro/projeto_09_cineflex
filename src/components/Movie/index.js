import { Link } from 'react-router-dom';
import './style.css'
export default function Movie({movie}){

    
    return (
        <div className='movie-container'>
            <Link to='/sessions'>
            <img src={movie.posterURL}></img>
            </Link>
        </ div>
    )
}