import { useLocation, useNavigate } from 'react-router-dom'
import './style.css'

export default function Header(){

    const navigate = useNavigate();
    const screen = useLocation().pathname;
    const buttonCss =  screen === '/' && 'hidden'

    return (
        <header>
            <button className={buttonCss} onClick={() => navigate(-1)}>
                <ion-icon name="caret-back-outline"></ion-icon>
            </button>
            <h1>CINEFLEX</h1>
        </header>
    )
}