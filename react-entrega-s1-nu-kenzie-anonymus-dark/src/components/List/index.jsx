import "./style.css"

import semConteudo from "../../NoCard.png"
import Card from "../Card"

export default function List({data}){

    return(

        <section className="sessao">
            {
                data == 0 ?

                    <>
                        <h2 className="sessao__titulo">Você ainda não possui nenhum lançamento</h2>
                        <img className="sessao__imagem" src={semConteudo} alt="sem produtos" />
                    </>

                :

                <>
                    
                    {
                        data.map( ( card, key )=> <Card key={key} description={card.description} type={card.type} value={card.value}/> )
                    }

                </>
            }
        </section>
    )
}