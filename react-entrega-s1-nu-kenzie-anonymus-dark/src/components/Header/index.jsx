import Button from "../Button"

import logo from '../../logoBlack.svg'

import "./style.css"

export default function Header({setIsLogged}){

    function comeBackLogin(){

        setIsLogged(false)
    }

    return(
        <header className="cabecalho">
            <img className="cabecalho__logo" src={logo} alt="Logo" />
            <Button onClick={comeBackLogin} smallSizeGray type="button">Inicio</Button>
        </header>
    )
}