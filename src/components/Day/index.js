import Showtimes from '../Showtimes'


export default function Day({showtimes}){

    console.log(showtimes);

    return (

        showtimes.map(s => <Showtimes showtime={s} />)

    )
}