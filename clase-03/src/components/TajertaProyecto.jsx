import "./proyecto.css"

export default function TarjetaProyecto({key,titulo, descripcion, botonTexto}){


    return(

        <section>

            <h2>Ejercicio 2</h2>
            <div className="card-container" key={key}>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <button>{botonTexto}</button>


            </div>
            

        </section>

    )

}