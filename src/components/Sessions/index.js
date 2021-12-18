import { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'
import Day from '../Day'
import { useParams } from 'react-router-dom'

import Footer from '../Footer';

export default function Sessions(){


    const [days, setDays] = useState([]);
    //const [movieInfo, setMovieInfo] = useState([]);

    const { idMovie } = useParams();




    useEffect(() =>
    {
        axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`)
        .then(response =>{
            setDays(response.data.days);
            //setMovieInfo(response.data);
        })
    }
    ,[]);

    
    return (
        <section>
            <div className='title'>
                <h2>Selecione o horário</h2>
            </div>
            
            
            {days.map(s =>  (
                <div key={s.id}>
                    <h2>{s.weekday}</h2><h2>{s.date}</h2>
                    <Day key={s.id} showtimes={s.showtimes}/>
                </div>
            ))} 

            <Footer />  
        </section>
    )
}