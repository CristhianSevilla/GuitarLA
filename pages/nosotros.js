import Layout from '@/components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'

function Nosotros() {
    return (

        <>
            <Layout
                title={'Nosotros'}
                description={'Acerca de nosotros, Guitar los Angeles, tienda de música'}
            >

               <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>

                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imágen sobre nosotros" />

                    <div>
                        <p>Vivamus nec imperdiet erat. In sem leo, scelerisque vel interdum non, semper nec purus. Aliquam id ex erat. Nulla vitae erat quis turpis cursus placerat. Phasellus lacinia vitae lacus eget accumsan. Cras enim nisl, facilisis sit amet velit id, laoreet scelerisque lorem. Curabitur ut elit diam. Proin eget suscipit est, quis tincidunt orci. Nulla ex nunc, dapibus at sodales quis, congue eu ex. </p>
                        <p>
                        Vestibulum justo dui, condimentum quis porta semper, porta sed urna. Vivamus a turpis in nisl fermentum condimentum. Maecenas eu venenatis quam. Vivamus odio mi, laoreet eget lectus eu, molestie molestie eros. Vestibulum sed semper ante, sed tincidunt arcu. Aliquam blandit quam ipsum, vel auctor purus ullamcorper vel. Fusce tincidunt est in nunc ultricies, ut dignissim diam lacinia.  
                        </p>
                    </div>
                </div>
               </main>

            </Layout>



        </>
    )
}

export default Nosotros