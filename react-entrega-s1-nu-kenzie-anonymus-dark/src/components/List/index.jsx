import "./style.css"

import semConteudo from "../../NoCard.png"
import Card from "../Card"

export default function List({data, filtro, setData, valueUpadate, setFiltro}){

    return(

        <section className="sessao">
            {
                data == 0 || filtro[0] === true ?

                    <>
                        <h2 className="sessao__titulo">Você ainda não possui nenhum lançamento</h2>
                        <img className="sessao__imagem" src={semConteudo} alt="sem produtos" />
                    </>

                :

                <>
                    
                    {   
                        filtro == 0 ?

                        data.map( ( card )=> <Card key={card.id} id={card.id} description={card.description} type={card.type} value={card.value} setData={setData} valueUpadate={valueUpadate} setFiltro={setFiltro}/> )

                        :

                        filtro.map( ( card )=> <Card key={card.id} id={card.id} description={card.description} type={card.type} value={card.value} setData={setData} valueUpadate={valueUpadate} setFiltro={setFiltro}/> )
                    }

                </>
            }
        </section>
    )
}