import "./equipo.css"

export default function EquipoTalentoLab(){

    const equipo = [
        {
            nombre: "Manuel Quiroz",
            rol: "Proyect Manager",
            img: "https://media.istockphoto.com/id/1300972574/es/foto/l%C3%ADder-de-equipo-masculino-millennial-organiza-taller-virtual-con-empleados-en-l%C3%ADnea.jpg?s=612x612&w=0&k=20&c=SWvvszsskWnHXCWq_g6S85iAPYt9rulJP2RPmcn4o0A="
        },
        {
            nombre: "Laura Fernandez",
            rol: "Diseñora UI/UX",
            img: "https://media.istockphoto.com/id/1398385367/es/foto/feliz-mujer-de-negocios-millennial-con-gafas-posando-con-las-manos-cruzadas.jpg?s=612x612&w=0&k=20&c=pgJoHs698wY3npJz7AyxosicITYgSDo0G6fxbT5Bwa0="
        },
        {
            nombre: "Santiago Perez",
            rol: "Desarrolador Backend",
            img: "https://media.istockphoto.com/id/1309328823/es/foto/retrato-a-la-cabeza-de-un-empleado-masculino-sonriente-en-la-oficina.jpg?s=612x612&w=0&k=20&c=dHyuXtXkuaHfJN4t205t_Xt1mKRxa8LY2ViVQi837f0="
        },{
            nombre: "Maria Martinez",
            rol: "Desarrolladora FrontEnd",
            img: "https://media.istockphoto.com/id/1386479313/es/foto/feliz-mujer-de-negocios-afroamericana-millennial-posando-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=JP0NBxlxG2-bdpTRPlTXBbX13zkNj0mR5g1KoOdbtO4="
        }
    ]

    return (
 
    <section >
        <h2>Ejercicio 1</h2>
        {equipo.map((team,index)=>(    
            <div key={index} className="card-container" >
                <img src={team.img} alt={`Imagen de ${team.nombre}`} />
                <h3>{team.nombre}</h3>
                <p>{team.rol}</p>
                </div>           
))}
   </section>           

    )
}

