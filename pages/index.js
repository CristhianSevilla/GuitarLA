import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import Post from "@/components/post"
import styles from 'styles/grid.module.css'

export default function Home({ guitarras, posts }) {

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

  const [resGuitarras, restPosts] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts)
  ])

  const [{ data: guitarras }, { data: posts }] = await Promise.all([
    resGuitarras.json(),
    restPosts.json()
  ])

  return {
    props: {
      guitarras,
      posts
    }
  }
}
