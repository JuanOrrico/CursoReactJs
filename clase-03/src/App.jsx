import EquipoTalentoLab from "./components/EquipoTalentoLab"
import TarjetaProyecto from "./components/TajertaProyecto"


function App() {
  

  
  const proyecto = [{
    titulo: "Aplicación para curar el mal de ojo",
    descripcion:"En este proyecto ayudaremos a varias personas que no pueden llamar a sus abuelas para que le curen el mal de ojo",
    botonTexto: "Ver mas.."
  }]

  

  return (
    <>
      <EquipoTalentoLab/>
      <TarjetaProyecto key={proyecto.id} titulo={proyecto.titulo} descripcion={proyecto.descripcion} botonTexto={proyecto.botonTexto}/>
    </>
  )
}

export default App
