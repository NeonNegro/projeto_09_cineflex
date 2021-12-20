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
            <div class="title">
                <h2>Selecione o Filme</h2>
            </div>
            <div className="movies-container">
                {movies.map(m => <Movie key={m.id} movie={m} />)}
            </div>
        </section >
    )
}   