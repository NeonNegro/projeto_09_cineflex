import './style.css'

export default function Footer({info}){

    let time;

    if(!info) return  'carregando'

    time = (info.time) ? <span className='time'>{info.time}</span> : '';

    return (
        <footer>
            <div className="poster container">
                <img src={info.posterURL} alt="poster do filme" />
            </div>
            <div className="info">
                <span> {info.title} </span>
                <span> {time} </span>
            </div>
        </footer>
    )
}