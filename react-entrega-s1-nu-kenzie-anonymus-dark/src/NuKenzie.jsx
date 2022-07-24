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

  const [ data, setData ] = useState([])

  const [ filtro, setFiltro ] = useState([])

  const [ value, setValue ] = useState(0)

  const [ id, setId ] = useState(0)
  
  function valueUpadate( newData ){

      const soma = newData.reduce( ( acumulador, atual ) =>{
        if( atual.type === "Entrada"){
          return acumulador + Number( atual.value )
        }
        if( atual.type === "Despesas"){
          return acumulador - Number( atual.value )
        }
      } ,0)

      setValue( soma )
  }

  return (

    <>
      {
        isLogged ?
          <div className="homePage">
            <Header setIsLogged={setIsLogged}/>

            <div className="homePage__block">
              <div className="homePag__form">
                <Form setData={setData} data={data} setId={setId} valueUpadate={valueUpadate}/>

                <TotalMoney data={data} value={value}/>
              </div>

              <div className="homePag__sessao">

                  <Filtro data={data} setFiltro={setFiltro} valueUpadate={valueUpadate}/>

                  <List data={data} filtro={filtro} setData={setData} valueUpadate={valueUpadate} setFiltro={setFiltro}></List>
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
