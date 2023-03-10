import { useState } from "react";
import Layout from "@/components/layout"
import Image from "next/image"
import { mostrarAlerta } from "../../utils/helpers";
import styles from "../../styles/guitarras.module.css"

export default function Producto({ guitarra, agregarCarrito }) {

    const [cantidad, setCantidad] = useState(0)

    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

    const handleSubmit = e => {
        e.preventDefault()

        //Validar cantidad
        if (cantidad < 1) {
            mostrarAlerta('Cantidad no valida', '', 'error')
            return
        }

        //Construir un objeto con la guitarra seleccionada y almacenarla en LocaleStorage para no estar haciendo tantas peticiones a nuestra API

        const guitarraSeleccionada ={

            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad,
        }//En el caso de nombre, precio y cantidad la llave y el valor se llaman igual asi que solo se pone una vez

        //Pasar el Objeto al context
        agregarCarrito(guitarraSeleccionada)

        //Madar la alerta al usuario de que su carrito fue gregado
        mostrarAlerta('Agregado con Éxito', '', 'success')
        
        //Redireccionar al usuario a la tienda
        

    }

    return (

        <Layout
            title={`Guitarra ${nombre}`}
        >

            <div className={styles.guitarra}>
                <Image src={imagen.data.attributes.url} width={400} height={400} alt={`Imagen de la guitarra ${nombre}`} />

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcioncompleta}>{descripcion}</p>
                    <p className={styles.precio} >${precio}</p>

                    <form 
                    className={styles.formulario}
                    onSubmit={handleSubmit}
                    >
                        <label htmlFor="cantidad">Cantidad</label>

                        <select
                            id="cantidad"
                            // El signo + convierte el string en numero
                            onChange={e => setCantidad(+e.target.value)}
                        >
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <input
                            type="submit"
                            value="Agregar al carrito"
                        />
                    </form>
                </div>
            </div>

        </Layout>

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
