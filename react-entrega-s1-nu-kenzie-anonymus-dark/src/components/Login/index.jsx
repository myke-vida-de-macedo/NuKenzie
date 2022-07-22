import Button from "../Button"

import imagemLogin from '../../loginImage.svg'
import logo from '../../logo.png'

import "./style.css"

export default function Login({ setIsLogged }){

    function logar(){

        setIsLogged(true)
    }

    return(
        <>
            <div className="Login__prohibited">
                <img className="prohibited__logo" src={logo} alt="Logo"/>

                <p className="prohibited__description-1">Centralize o controle das suas finanças</p>

                <span className="prohibited__description-2">de forma rápida e segura</span>

                <Button onClick={logar} type="button">Iniciar</Button>
            </div>
            <img className="Login__image" src={imagemLogin} alt=""/>
        </>
    )
}