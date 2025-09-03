import "./proyecto.css"

export default function TarjetaCard(){

 const proyecto = [{
    id:1,
    titulo: "Aplicación para curar el mal de ojo",
    descripcion:"En este proyecto ayudaremos a varias personas que no pueden llamar a sus abuelas para que le curen el mal de ojo",
    botonTexto: "Ver mas.."
  },{
    id:2,
    titulo: "Aplicación para saltar en una pata",
    descripcion:"En este proyecto ayudaremos a varias personas a poder saltar en una pata",
    botonTexto: "Ver mas.."
  },{
    id:3,
    titulo: "Aplicación para cruzar la calle",
    descripcion:"En este proyecto ayudaremos a varias personas a cruzar la calle",
    botonTexto: "Ver mas.."
  },{
    id:4,
    titulo: "Aplicación para comer naranjas",
    descripcion:"En este proyecto ayudaremos a varias personas a comer naranjas",
    botonTexto: "Ver mas.."
  }]


    return(

        <section>
            
             <h2 className="h2-titulo">Ejercicio 2</h2>
            { 
               
                proyecto.map((proy)=>(
                    <div key={proy.id} className="card-team" >
                        <h3 className="h3-card-proy">{proy.titulo}</h3>
                        <p>{proy.descripcion}</p>
                        <button onClick={()=>{console.log(`Explorando ${proy.titulo}`)}}>{proy.botonTexto}</button>
                    </div>
                    ))
            }
           
            

        </section>

    )
}