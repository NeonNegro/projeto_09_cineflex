import { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from '../Movie'

import './style.css'



export default function MovieList(){

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies')
            .then( response =>{
                setMovies(response.data);
            });
    },[]);


    return (
        <section className="movie-list">
            <h1>Selecione o Filme</h1>
            <div className='container'>
                {movies.map(m => <Movie key={m.id} movie={m} />)}
            </div>
        </section >
    )
}   