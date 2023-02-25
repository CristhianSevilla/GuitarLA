import Layout from '@/components/layout'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'
function Tienda({ guitarras }) {


    return (

        <>

            <Layout
                title={'Tienda'}
                description={'Tienda Virtual, Venta de guitarras y otros instrumentos músicales, GuitarLA'}
            >

                <main className="contenedor">
                    <h1 className="heading">Nuestra Colección</h1>

                    <div className={styles.grid} >

                        {guitarras?.map(guitarra => (
                            <Guitarra
                                key={guitarra.id}
                                guitarra={guitarra.attributes}
                            />
                        ))}

                    </div>

                </main>


            </Layout>



        </>
    )
}

export default Tienda

//Consultar la Api

export async function getServerSideProps() {

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const { data: guitarras } = await respuesta.json()

    return {
        props: {
            guitarras
        }
    }
}