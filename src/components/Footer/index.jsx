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
                <span className='title'>{info.title}</span>
                {time}
            </div>
        </footer>
    )
}