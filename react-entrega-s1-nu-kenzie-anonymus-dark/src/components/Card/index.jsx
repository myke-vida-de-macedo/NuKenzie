import { FaTrash } from "react-icons/fa" 

import "./style.css"

export default function Card({description, type, value, setData, id, valueUpadate }) {

    function removeCard( event ){

        const id = event.nativeEvent.path[3].id
        
        if( id != "" ){
            setData( data => {

                const newData = data.filter( card => card.id != id )

                valueUpadate(newData)

                return newData 

            } )
        }
    }   

    return(

        <div id={id} className="card" style={ type === "Entrada" ? {borderLeft:`4px solid #03B898`} : {borderLeft:`4px solid #E9ECEF`} }>
            <div className="card__information">
                <h3 className="information__title">{description}</h3>
                <span className="information__type">{type}</span>
            </div>
            <p className="card__value">{value}</p>
            <button onClick={removeCard} className="card__botao">
                <FaTrash/>
            </button>
        </div>
    )
}