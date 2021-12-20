import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import './style.css'
import { Link } from 'react-router-dom';
import axios from "axios";

import Seat from '../Seat';
import Footer from "../Footer";



export default function Seats(){



    const [seats, setSeats] = useState([]);
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const [sessionInfo,setSessionInfo] = useState();
    
    const {idSession} = useParams();
    const history = useNavigate();
    
    useEffect(() =>{
        axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSession}/seats`)
        .then( response =>{
            const seats = response.data.seats;
            seats.forEach(s => {
                s.isSelected = false;
            });
            setSeats(seats);
            setSessionInfo({
                title: response.data.movie.title,
                time: `${response.data.day.weekday} - ${response.data.name}`,
                posterURL: response.data.movie.posterURL
            })
        });
    }, []);
    


    function buy(){

        let bought = {
            ids: [],
            name : name,
            cpf: cpf
        };

        seats.filter(s => s.isSelected).forEach(s => {
            bought.ids.push(s.id);
        });

        console.log(bought);


        axios.post(`https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many`, bought)
        .then( response => {
            history('/sucesso');
            console.log('pegou');
        })
        .catch( error =>{
            console.log(error);
        })
    }







    if(!seats) return <h2>Carregando...</h2>

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
            <div className="example">
                <div>
                    <div className="seat selected">
                    </div>
                    <span>  Selecionado</span>
                </div>
                <div>
                    <div className="seat">
                    </div>
                    <span> Disponível</span>
                </div>
                <div>
                    <div className="seat occupied">
                    </div>
                    <span>  Indisponível</span>
                </div>
            </div>

            
            <div className="fields">
                <span className="buyer-name">Nome do comprador: </span>
                <input type='text' placeholder="Digite seu nome..." value = {name} onChange={(e) => setName(e.currentTarget.value)}></input>
                <span className='buyer-cpf'>CPF do comprador: </span>
                <input type='text' placeholder="Digite seu CPF..." value= {cpf} onChange= {(e) => setCPF(e.currentTarget.value)}></input>
            </div>

            <Link to=''>
                <button onClick={buy}>Reservar assentos</button>
            </Link>
            <Footer sessionInfo={sessionInfo} />
        </section>
    )
}