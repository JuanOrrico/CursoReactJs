import "./array.css"

export default function Array(){
 const lista = ["Manzana", "Pera", "Banana", "Anana", "Uva"]
    return(
        
        <ul>
            {
              lista.map((fruta, index)=>(
                <li key={index}>{fruta}</li>
              ))  
            }
           
        </ul>
    )
}