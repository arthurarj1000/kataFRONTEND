import { useState } from 'react'
import BotonComponent from './components/Boton'
import Texto from './components/Texto'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  /**
   * Tipos de componentes
   * -  Stateless: (Sin estado)
   * - Stateful: (Con estado)
   */

  return (
    <>
    <h1>Hola desde vite!</h1>
    <Texto></Texto>
    <BotonComponent texto="Pizza" icon="🍕"></BotonComponent>
    <BotonComponent texto="Hamburguesa" icon="🍔" ></BotonComponent>
    <BotonComponent texto="Comida china" icon="🥡"></BotonComponent>
    </>
  )
}

export default App
