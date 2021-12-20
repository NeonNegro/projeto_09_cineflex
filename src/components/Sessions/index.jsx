import { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'
import Day from '../Day'
import { useParams } from 'react-router-dom'

import Footer from '../Footer';

export default function Sessions(){


    const [days, setDays] = useState([]);
    const [info, setInfo] = useState([]);

    const { idMovie } = useParams();




    useEffect(() =>
    {
        axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`)
        .then(response =>{
            setDays(response.data.days);
            setInfo({
                title: response.data.title,
                time: ``,
                posterURL: response.data.posterURL
            })
        })
    }
    ,[]);

    
    return (
        <section className='sessions'>
            <div className='title'>
                <h2>Selecione o horário</h2>
            </div>
            
            
            {days.map(s =>  (
                <div className='days-container' key={s.id}>
                    <h3>{`${s.weekday} - ${s.date}`}</h3>
                    <Day key={s.id} showtimes={s.showtimes}/>
                </div>
            ))} 

            <Footer info={info} />  
        </section>
    )
}