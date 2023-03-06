import Layout from "@/components/layout"
import Image from "next/image"
import { formatearFecha } from "../../utils/helpers";
import styles from "../../styles/blog.module.css"

function Blog({ post }) {

    const { titulo, imagen, contenido, url, publishedAt } = post[0].attributes

    return (
        <Layout
            title={`Blog ${titulo}`}
        >

            <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image src={imagen.data.attributes.url} width={800} height={800} alt={`Imagen del blog ${titulo}`} />

                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>

        </Layout>
    )
}

export default Blog


// Con getStaticPaths y getStaticProps las paginas se crean una sola vez cuando se hace build 

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/posts`)
    const { data } = await respuesta.json()

    const paths = data.map(post => ({
        params: {
            url: post.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { url } }) {

    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const { data: post } = await respuesta.json()

    return {

        props: {
            post
        }
    }
}

// export async function getServerSideProps({ query: { url } }) {
//     // query es informacion que se pasa automaticamente en get server side props

//     const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
//     const { data: post } = await respuesta.json()

//     return {

//         props: {
//             post
//         }
//     }
// }