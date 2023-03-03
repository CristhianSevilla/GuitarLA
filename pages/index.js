import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import curso from "@/components/curso"
import Post from "@/components/post"
import styles from 'styles/grid.module.css'
import Curso from "@/components/curso"

export default function Home({ guitarras, posts, curso }) {

  return (
    <>

      <Layout

        title={"Inicio"}
        description={"Guitar los Angeles, Venta de guitarras, Blog de música y más"}
      >

        <main className="contenedor">
          <h1 className="heading">Nuestra colección</h1>
          <div className={styles.grid} >

            {guitarras?.map(guitarra => (
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
            ))}

          </div>
        </main>

        <Curso 
        curso={curso}
        >

        </Curso>

        <section className="contenedor">
          <h2 className="heading">Nuestro Blog</h2>

          <div className={styles.grid}>
                    {posts.map(post => (
                        <Post
                            key={post.id}
                            post={post.attributes}
                        />
                    ) )}
                </div>
        </section>


      </Layout>


    </>
  )
}

//Cuando se hacen consultas a la API con varios links se usan promises
export async function getStaticProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [resGuitarras, restPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])

  const [{ data: guitarras }, { data: posts }, {data: curso}] = await Promise.all([
    resGuitarras.json(),
    restPosts.json(),
    resCurso.json()
  ])

  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }
}
