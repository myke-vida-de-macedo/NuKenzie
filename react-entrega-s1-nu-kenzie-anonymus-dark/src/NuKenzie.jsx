import Login from "./components/Login";
import Header from "./components/Header";

import { useState } from 'react'

import './css/homePage.css';
import './css/Login.css'

function NuKenzie() {

  const [ isLogged, setIsLogged ] = useState(false)

  return (

    <>
      {
        isLogged ?
          <div className="homePage">
            <Header setIsLogged={setIsLogged}/>
        
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
