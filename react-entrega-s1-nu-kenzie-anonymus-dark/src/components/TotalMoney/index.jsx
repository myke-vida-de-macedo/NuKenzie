import "./style.css"

export default function TotalMoney({ data, value }){
    
    return(

        data != 0 &&

        <div className="blockAllValue">
            <div className="blockAllValue__information">
                <h3 className="information__title">Valor total:</h3>

                <span className="information__description">O valor se refere ao saldo</span>
            </div>
            
            <p className="blockAllValue__block">
                R$ 
                <span className="block__allValue"> {value}</span>
            </p>
        </div>
    )
}