import { useState } from "react"

import "./tarjeta.css"

export default function Tarjeta(){

    const tarjetas = [{
      id:1,
      titulo: "Museo 1",
      description: "El Museo 1 es de Ciencias Naturales",
      boton: "Ver Mas.."
    },
  {
      id:2,
      titulo: "Museo 2",
      description: "El Museo 2 es de Historia Egipcia",
      boton: "Ver Mas.."
    },
  {
      id:3,
      titulo: "Museo 3",
      description: "El Museo 3 es de Ciencias Tecnologicas",
      boton: "Ver Mas.."
    },
  {
      id:4,
      titulo: "Museo 4",
      description: "El Museo 4 es de Arte",
      boton: "Ver Mas.."
    },
  {
      id:5,
      titulo: "Museo 5",
      description: "El Museo 5 es de Deportes",
      boton: "Ver Mas.."
    },
  {
      id:6,
      titulo: "Museo 1",
      description: "El Museo 6 es de Música",
      boton: "Ver Mas.."
    },]
    
    const [color, setColor] = useState(false)

    const estiloActivo = {
    backgroundColor: '#255',
    color: 'white',
    padding: '10px',
  
  };

   const estiloNormal = {
    backgroundColor: '#000',
    color: 'white',
    
  };

   const handleClick = () => {
    setColor(!color); 
  };

    return(

      <>
       {tarjetas.map(card=>(

          <div key={card.id} style={color ? estiloActivo : estiloNormal} className="card-container">
            <h3>{card.titulo}</h3>
            <p>{card.description}</p>
            <button onClick={handleClick} >{card.boton}</button>
          </div>


       ))}
       
      
      </>
        
    )
}