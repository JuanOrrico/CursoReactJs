import "./saludo.css"

export default function Saludo({texto, bgColor, position}){

   function onClick(){
    if(texto == "Inicio"){
    alert("hola")}
    
    else{
        alert("Adios")
    }
   }
   
    return(
       
            <button className="btn-saludo" onClick={(onClick)} style={position==="left"? {backgroundColor: bgColor, left:100 } : {backgroundColor:bgColor, right: 100 }}>{texto}</button>
        
    )
}