
export default function Producto({guitarra}) {

    console.log(guitarra[0].attributes.nombre);
    return (
        <div>
            <h1>Producto</h1>
        </div>
    )
}

export async function getServerSideProps({query: {url}}){
    // query es informacion que se pasa automaticamente en get server side props

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data: guitarra} = await respuesta.json()

    console.log(guitarra);

    return{

        props:{
            guitarra
        }
    }
}
