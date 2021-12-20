import { Link } from 'react-router-dom';

import './style.css'


export default function Day({showtimes}){




    return (
        <div className='hours-container'>
            {showtimes.map(s => (
                <Link key={s.id} to={`/assentos/${s.id}`}>
                    <button>{s.name}</button>
                </Link>
            ))}
        </div>
    )
}