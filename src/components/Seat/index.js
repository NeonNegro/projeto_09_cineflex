import './style.css'


export default function Seat({seatInfo: seat}){

    console.log(seat);



    function select(id){
        console.log(id)
    }


    return (
        <div className={`seat ${!seat.isAvailable && 'occupied'} ${seat.isSelected && 'selected'}`} onClick={() => {select(seat.id)}}>
            <span>{seat.name}</span>
        </div>
    )
}