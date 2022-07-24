import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from "../Button"
import "./style.css"

export default function Filtro({ data, setFiltro, valueUpadate }){

    function enderFilter( event ){

        const name = event.target.innerText

        todos( name )
        Entradas( name )
        Despesas( name )
    }

    function todos( name ){
        if( name === "Todos" ){

            toast.info("Entrou em Todos")

            valueUpadate(data)

            setFiltro([])
        }
    }
    function Entradas( name ){
        if( name === "Entradas" ){
            
            toast.info("Entrou em Entradas")

            const newFilter = data.filter( card => card.type == "Entrada" )

            valueUpadate(newFilter)

            if(newFilter == 0){
                newFilter.push( true )
            }

            setFiltro(newFilter)
        }
    }
    function Despesas( name ){
        if( name === "Despesas" ){

            toast.info("Entrou em Despesas")

           const newFilter = data.filter( card => card.type == "Despesas" )

           valueUpadate(newFilter)

           if(newFilter == 0){
            newFilter.push( true )
            }

            setFiltro(newFilter)
        }
    }

    return(

        <div className="filtro">
            <span className="filtro__titulo">Resumo financeiro</span>

            <nav onClick={enderFilter} className="filtro__navegacao">
                <Button smallSize>Todos</Button>
                <Button smallSize>Entradas</Button>
                <Button smallSize>Despesas</Button>
            </nav>
        </div>
    )
}