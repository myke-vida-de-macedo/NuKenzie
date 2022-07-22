import Login from "./components/Login";

import { useState } from 'react'

import './css/NuKenzie.css';
import './css/Login.css'

function NuKenzie() {

  const [ isLogged, setIsLogged ] = useState(false)

  return (

    <>
      {
        isLogged ?
          <div className="NuKenzie">

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
