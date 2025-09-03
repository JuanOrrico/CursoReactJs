import GaleriaCard from "./GaleriaCard";




export default function Galeria(){

    const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

    return(
        <section>
            <h2 className="h2-titulo">Ejercicio 3</h2>
            {intereses.map((int, index) => (
        
                <GaleriaCard key={index} int={int} />
            ))}
        </section>

    )
}