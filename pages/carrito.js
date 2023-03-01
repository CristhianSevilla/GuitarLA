import Layout from "@/components/layout"
import styles from "../styles/carrito.module.css"
import Producto from "./guitarras/[url]"
import Image from "next/image"


function Carrito({ carrito }) {
    return (
        <Layout
            title="Carrito de compras"
        >

            <main className="contenedor">
                <h1 className="heading">Carrito</h1>

                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Artículos</h2>

                        {carrito.length === 0 ? "Carrito Vacio" : (

                            carrito.map(producto => (
                                <div key={producto.id} className={styles.producto} >
                                    <div>
                                        <Image width={250} height={400} src={producto.imagen} alt={`Guitarra ${producto.nombre}`} />
                                    </div>
                                    <div>
                                        <p>Guitarra: <span className={styles.nombre}>{producto.nombre}</span></p>
                                        <p>Precio: <span className={styles.precio} >${producto.precio}</span></p>
                                        <p className={styles.subtotal}>Subtotal: <span>${producto.cantidad * producto.precio}</span></p>

                                    </div>
                                </div>
                            ))

                        )}

                    </div>

                    <aside className={styles.resumen}>
                        <h3>Resumen del pedido</h3>
                        <p>Total a pagar:</p>
                    </aside>
                </div>
            </main>

        </Layout>
    )
}

export default Carrito