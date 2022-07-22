import Button from "../Button"
import "./style.css"

export default function Filtro(){

    return(

        <div className="filtro">
            <span className="filtro__titulo">Resumo financeiro</span>

            <nav className="filtro__navegacao">
                <Button smallSize>Todos</Button>
                <Button smallSizeGray>Entradas</Button>
                <Button smallSizeGray>Despesas</Button>
            </nav>
        </div>
    )
}