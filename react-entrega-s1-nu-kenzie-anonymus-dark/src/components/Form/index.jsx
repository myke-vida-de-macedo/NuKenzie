import Button from "../Button"

import "./style.css"

export default function Form(){

    return(
        <form className="formulario">
            <label className="labelAll formulario__descriptionName" htmlFor="Descrição">Descrição</label>
            <input className="formulario__description" type="text" name="" id=""placeholder="Digite aqui sua descrição"/>
            <span className="formulario__ex">Ex: Compra de roupas</span>

            <div className="formulario__blockValues">
                
                <div className="organize">
                    <label className="labelAll" htmlFor="Valor">Valor</label>
                    <input className="blockValues__valor" type="text" name="" id="" />
                </div>

                <div className="organize">
                    <label className="labelAll" htmlFor="Tipo de valor">Tipo de valor</label>
                    <select className="blockValues__blockType" id="">
                        <option className="blockType__type" value="Entrada">Entrada</option>
                        <option className="blockType__type" value="Despesas">Despesas</option>
                    </select>
                </div>

            </div>

            <Button>Inserir valor</Button>
        </form>
    )
}