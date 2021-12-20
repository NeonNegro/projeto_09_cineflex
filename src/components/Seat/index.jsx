import { useState } from 'react/cjs/react.development';
import './style.css'


export default function Seat({seatInfo: seat}){

    const [isSelected, setIsSelected] = useState(false);



    function handleIsSelected(seat, possible){
        if(!possible) return
        seat.isSelected = !seat.isSelected;
        setIsSelected (!isSelected);
    }

    

    // variaveis para testar ocupado

    return (
        <div className={`seat ${!seat.isAvailable && 'occupied'} ${isSelected && 'selected'}`} onClick={() => {handleIsSelected(seat, seat.isAvailable)}}>
            <span>{seat.name}</span>
        </div>
    )
}