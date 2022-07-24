import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from "../Button"

import "./style.css"

export default function Form({setData, data, setId, valueUpadate}){

    function getData( event ){

        event.preventDefault()

        const elementos = [...event.target].slice(0,3)

        const newObj = {}

        elementos.forEach( elemento => {
            
            if(elemento.value != ""){
                newObj[elemento.name] = elemento.value 
            }
            
            elemento.value = ""
        })

        setId( id => {
            newObj.id = id

            return id + 1
        })

        if( Object.values( newObj ) != 0 ){
            
            toast.success("Gerenciamento criado")

            setData(( previusObj => {

                valueUpadate([...previusObj, newObj])

                return [...previusObj, newObj]
            } ))
        }

    }
  

    return(
        <form onSubmit={getData} className="formulario">
            <label className="labelAll formulario__descriptionName" htmlFor="Descrição">Descrição</label>
            <input className="formulario__description" type="text" name="description" id=""placeholder="Digite aqui sua descrição" required/>
            <span className="formulario__ex">Ex: Compra de roupas</span>

            <div className="formulario__blockValues">
                
                <div className="organize">
                    <label className="labelAll" htmlFor="Valor">Valor</label>
                    <input className="blockValues__valor" name="value" type="text" id="" required/>
                </div>

                <div className="organize">
                    <label className="labelAll" htmlFor="Tipo de valor">Tipo de valor</label>
                    <select className="blockValues__blockType" name="type" id="" required>
                        <option className="blockType__type" value="Entrada">Entrada</option>
                        <option className="blockType__type" value="Despesas">Despesas</option>
                    </select>
                </div>

            </div>

            <Button>Inserir valor</Button>
        </form>
    )
}