import Showtimes from '../Showtimes'
import { Link } from 'react-router-dom';


export default function Day({showtimes}){

    console.log(showtimes);

    return (
        showtimes.map(s => (
        <Link key={s.id} to={`/assentos/${s.id}`}>
            <Showtimes  showtime={s} />
        </Link>
        ))
    )
}