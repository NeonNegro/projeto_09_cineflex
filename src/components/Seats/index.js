import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import './style.css'
import { Link } from 'react-router-dom';
import axios from "axios";

import Seat from '../Seat';
import Footer from "../Footer";



export default function Seats(){



    const [seats, setSeats] = useState([]);

    
    
    const {idSession} = useParams();
    
    useEffect(() =>{
        axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSession}/seats`)
        .then( response =>{
            const seats = response.data.seats;
            seats.forEach(s => {
                s.isSelected = false;
            });
            setSeats(seats);
        });
    }, []);
    


    if(!seats) return <h1>Carregando...</h1>

    return (
        <section>
            <div className="title">
                <h2>Selecione o(s) assento(s)</h2>
            </div>

            <div className="seats">
            {seats.map((s,i) => {
                if((i+1)%10 === 0) {
                    return (
                        <>
                            <Seat key={s.id} seatInfo={s} />
                            <div className="break"></div>
                        </>

                    )
                }
                else 
                    return (
                        <Seat key={s.id} seatInfo={s} />
                    )
            })}
            </div>

            <span className="buyer-name">Nome do comprador: </span>
            <input type='text'></input>
            <span className='buyer-cpf'>CPF do comprador: </span>
            <input type='text'></input>

            <Link to=''>
                <button>Reservar assentos</button>
            </Link>
            <Footer />
        </section>
    )
}