import "./style.css"

export default function Card({description, type, value }) {

    return(

        <div className="card" style={ type === "Entrada" ? {borderLeft:`4px solid #03B898`} : {borderLeft:`4px solid #E9ECEF`} }>
            <div className="card__information">
                <h3 className="information__title">{description}</h3>
                <span className="information__type">{type}</span>
            </div>
            <p className="card__value">{value}</p>
            <button className="card__botao">
                <img className="botao__imagem" src="" alt="" />
            </button>
        </div>
    )
}