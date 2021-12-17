import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './style.css'
import Day from '../Day'
import { useParams } from 'react-router-dom'

export default function Sessions(){


    const [days, setDays] = useState([]);
    const [movieInfo, setMovieInfo] = useState([]);

    const { idMovie } = useParams();




    useEffect(() =>
    {
        axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`)
        .then(response =>{
            setDays(response.data.days);
            setMovieInfo(response.data)
        })
    }
    ,[]);

    
    return (
        <section>
            <h1>Selecione o horário</h1>
            
            
            {days.map(s =>  (
                <>
                    <h2>{s.weekday}</h2><h2>{s.date}</h2>
                    <Day showtimes={s.showtimes}/>
                </>
            ))} 

        </section>
    )
}