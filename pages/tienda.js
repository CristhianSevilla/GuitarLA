import Layout from '@/components/layout'
import ListadoGuitarras from '../components/listado-guitarrras'

function Tienda({guitarras}) {

    console.log(guitarras);

    return (

        <>

            <Layout
                title={'Tienda'}
                description={'Tienda Virtual, Venta de guitarras y otros instrumentos músicales, GuitarLA'}
            >

                <main className="contenedor">
                    <h1 className="heading">Nuestra Colección</h1>

                    <ListadoGuitarras

                    />

                </main>


            </Layout>



        </>
    )
}

export default Tienda

//Consultar la Api

//Es una generacion estatica, es decir la información no se va a estar regenerando con cada visita de usuario sino que va a ser en el build

export async function getStaticProps(){

    const respuesta = await fetch('http://127.0.0.1:1337/api/guitarras?populate=imagen')
    const {data: guitarras} = await respuesta.json()

    console.log(guitarras);

    return{
        props:{
            guitarras
        }
    }
}