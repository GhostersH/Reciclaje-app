import Link from "next/link"
import Image from "next/image"
const Entrada = ({ entrada }) => {



    const { titulo, resumen, imagen, published_at, id } = entrada
    console.log(imagen)
    return (
        <article>

          


            <div> 
                
                <h1>{titulo}</h1>
                <p>{published_at}</p>
                <p>{resumen}</p>
                <Link href={`http://localhost:3000/nosotros`}>
                    Leer Entrada
                
                
                </Link>
            
            
            
            </div>


        </article>


    )
}

export default Entrada