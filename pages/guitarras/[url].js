
export default function Producto({ guitarra }) {

    console.log(guitarra[0].attributes.nombre);
    return (
        <div>
            <h1>Producto</h1>
        </div>
    )
}

// Con getStaticPaths y getStaticProps las paginas se crean una sola vez cuando se hace build 

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { url } }) {

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data: guitarra } = await respuesta.json()

    return {

        props: {
            guitarra
        }
    }
}

//Con server side props las paginas se crean en tiempo real, es decir se consulta la API y la base de datos cada que el usuario visite la pagina

// export async function getServerSideProps({query: {url}}){
//     // query es informacion que se pasa automaticamente en get server side props

//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const {data: guitarra} = await respuesta.json()

//     console.log(guitarra);

//     return{

//         props:{
//             guitarra
//         }
//     }
// }
