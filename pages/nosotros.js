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
                        <p>Somos un equipo de músicos apasionados por la guitarra y queremos ofrecer una amplia selección de guitarras de alta calidad en nuestra tienda online para que los amantes de la música puedan encontrar el instrumento que se adapte a sus necesidades y gustos musicales.</p>
                        <p>
                        Ofrecemos una excelente experiencia de compra en línea con una amplia selección de guitarras, accesorios, amplificadores e instrumentos para mejorar su experiencia musical.  
                        </p>
                        <p>Entendemos que comprar una guitarra es una inversión importante y es por eso que nos aseguramos de contar con un equipo altamente capacitado de expertos en guitarras, para poder ofrecer un servicio personalizado y atento a las necesidades de cada cliente. Siempre estamos dispuestos a responder cualquier pregunta y ayudar a nuestros clientes a encontrar el instrumento perfecto.</p>
                        <p>En nuestra tienda, nos esforzamos por brindar tanto guitarras de alta calidad como una experiencia excepcional para nuestros clientes, desde el primer contacto hasta después de la compra. Trabajamos con proveedores confiables y enviamos productos rápidamente y de manera segura para garantizar una entrega rápida.</p>
                        <p>Gracias por estar interesado en nuestra tienda. Esperamos poder ayudarte a encontrar la guitarra ideal para ti. Si necesitas ayuda en tu búsqueda, contáctanos sin dudarlo.</p>
                    </div>
                </div>
               </main>

            </Layout>



        </>
    )
}

export default Nosotros