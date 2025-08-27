import Saludo from './components/Botones/Saludo'
import Array from './components/Arrays/arrayProd.jsx/Array'
import Tarjeta from './components/Cards/Tarjeta'

function App() {


  return (
    <>
     
      <div>
        <Array />
      </div>
      
      <div>
        <Tarjeta />
      </div>
      <div>
         <Saludo texto="Inicio" bgColor={"#09f"} position="left"/>
        <Saludo texto="Salir" bgColor={"#ff3300ff"} position="right"/> 
      </div>
    
    </>
  )
}

export default App
