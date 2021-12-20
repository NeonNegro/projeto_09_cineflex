
import { useLocation, Link } from 'react-router-dom'
import './style.css'




export default function Sucess(){


    const {state} = useLocation();
    console.log(state);

    return (
        <section className='sucess'>
            <div className="title congrats">
                <h2>Pedido Feito com sucesso!</h2>
            </div>

            <div>
                <h3>Filme e Sessao</h3>
                <span>{state.movie}</span>
                <span>{state.time}</span>
            </div>
            <div>
                <h3>Ingressos</h3>
                {state.seatsNames.map(s => {
                    return <span>{`Assento ${s}`}</span>
                })}
            </div>
            <div>
                <h3>Comprador</h3>
                <span>{`Nome: ${state.name}`}</span>
                <span>{`CPF: ${state.cpf}`}</span>
            </div>

            <Link to={`/`}>
                <button> Voltar para Home</button>
            </Link>
            
        </section>
    )
}