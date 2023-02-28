import Image from "next/image"
import Link from "next/link"

const Post = ({post}) => {
 
const { titulo, contenido, imagen, url, publishedAt } = post

  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen del blog ${titulo}`} />

        <div>
            <h3>{titulo}</h3>
            <p>{publishedAt}</p>
            <p>{contenido}</p>
            <Link href={`/blog/${url}`} />
        </div>
    </article>
  )
}

export default Post