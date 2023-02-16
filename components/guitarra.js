import Image from "next/image"
import Link from "next/link"

function Guitarra({ guitarra }) {

    const { nombre, descripcion, precio, imagen, url } = guitarra

    return (
        <>
            <div>
                <Image src={imagen.data.attributes.formats.medium.url} width={400} height={400} alt={`Imagen de la guitarra ${nombre}`} />

                <div>
                    <div>{nombre}</div>
                    <div>{descripcion}</div>
                    <div>${precio}</div>
                    <Link href={`guitarras/${url}`}>
                        Ver producto
                    </Link>


                </div>
            </div>

        </>
    )
}

export default Guitarra