import Login from "./components/Login";
import Header from "./components/Header";
import Form from "./components/Form";
import Filtro from "./components/Filtro"
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

import { useState } from 'react'

import './css/homePage.css';
import './css/Login.css'

function NuKenzie() {

  const [ isLogged, setIsLogged ] = useState(false)

  const [ data, setData ] = useState([{description:"Salário - Mês Dezembro", type:"Entrada", value:"R$ 6.660,00"},{description:"Salário - Mês Dezembro", type:"Etrada", value:"R$ 6.660,00"}])

  const [ value, setVelue ] = useState(0)

  function updateValue(){

    const soma = data.reduce( ( acumulador, atual ) => acumulador + atual.value ,0)

    setVelue( soma )
  }

  return (

    <>
      {
        isLogged ?
          <div className="homePage">
            <Header setIsLogged={setIsLogged}/>

            <div className="homePage__block">
              <div lassName="homePag__form">
                <Form/>

                <TotalMoney data={data} value={value}/>
              </div>

              <div className="homePag__sessao">

                  <Filtro/>

                  <List data={data}></List>
              </div>
            </div>

          </div>
        :
          <div className="Login">
            <Login setIsLogged={setIsLogged}/>
          </div>
      }
    </>
  );
}

export default NuKenzie
