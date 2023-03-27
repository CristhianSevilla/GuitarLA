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
                        <p>Bienvenidos a nuestra tienda online de guitarras. Somos un equipo de músicos apasionados por la música y especialmente por la guitarra. Nuestra tienda nace con la intención de ofrecer a los amantes de la música una amplia selección de guitarras de alta calidad, para que puedan encontrar el instrumento que se adapte a sus necesidades y gustos musicales.</p>
                        <p>
                        Nos enorgullece ofrecer a nuestros clientes una experiencia de compra online sin igual. Además de contar con una gran variedad de marcas y modelos de guitarras, también ofrecemos una amplia gama de accesorios, amplificadores y otros instrumentos para complementar su experiencia musical.  
                        </p>
                        <p>Entendemos que comprar una guitarra es una inversión importante y es por eso que nos aseguramos de contar con un equipo altamente capacitado de expertos en guitarras, para poder ofrecer un servicio personalizado y atento a las necesidades de cada cliente. Siempre estamos dispuestos a responder cualquier pregunta y ayudar a nuestros clientes a encontrar el instrumento perfecto.</p>
                        <p>En nuestra tienda, no sólo nos preocupamos por ofrecer guitarras de alta calidad, sino que también nos enfocamos en hacer que la experiencia de nuestros clientes sea excepcional desde el primer contacto hasta después de su compra. Trabajamos con proveedores de confianza y enviamos nuestros productos con rapidez y seguridad para garantizar que nuestros clientes reciban su compra en el menor tiempo posible.</p>
                        <p>Agradecemos su interés en nuestra tienda y esperamos poder ayudarle a encontrar la guitarra perfecta para usted. ¡No dude en ponerse en contacto con nosotros si necesita ayuda en su búsqueda!</p>
                    </div>
                </div>
               </main>

            </Layout>



        </>
    )
}

export default Nosotros