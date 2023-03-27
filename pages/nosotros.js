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
                <h1 className="heading">Nosotros</h1>

                <div className={styles.contenido}>

                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imágen sobre nosotros" />

                    <div>
                        <p>Somos un equipo de músicos apasionados por la guitarra y ofrecemos una amplia selección de guitarras de alta calidad en nuestra tienda online para que los amantes de la música puedan encontrar el instrumento perfecto. También ofrecemos accesorios, amplificadores e instrumentos para mejorar la experiencia musical. Contamos con un equipo altamente capacitado de expertos en guitarras que están dispuestos a responder cualquier pregunta y ayudar a los clientes a encontrar el instrumento ideal. Trabajamos con proveedores confiables y enviamos productos rápidamente y de manera segura para garantizar una entrega rápida. En resumen, ofrecemos tanto guitarras de alta calidad como una experiencia excepcional para nuestros clientes, desde el primer contacto hasta después de la compra. Si necesitas ayuda en tu búsqueda, contáctanos sin dudarlo.</p>
                    </div>
                </div>
               </main>

            </Layout>



        </>
    )
}

export default Nosotros