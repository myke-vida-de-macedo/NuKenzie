import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from "../Button"

import logo from '../../logoBlack.svg'

import "./style.css"

export default function Header({setIsLogged}){

    function comeBackLogin(){

        toast.success("Volte sempre")

        setIsLogged(false)
    }

    return(
        <header className="cabecalho">
            <div className="centralizacao">
                <img className="cabecalho__logo" src={logo} alt="Logo" />
                <Button onClick={comeBackLogin} smallSize type="button">Inicio</Button>
            </div>
        </header>
    )
}