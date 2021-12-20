import './style.css'

export default function Footer({sessionInfo}){

    const img = '';

    if(!sessionInfo) return  'carregando'

    return (
        <footer>
            <div className="poster container">
                <img src={sessionInfo.posterURL} alt="poster do filme" />
            </div>
            <div className="info">
                <span className='title'>{sessionInfo.title}</span>
                <span className='time'>Quinta-feira - 15:00</span>
            </div>
        </footer>
    )
}