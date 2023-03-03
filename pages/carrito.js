import { useState, useEffect } from "react";
import Layout from "@/components/layout"
import styles from "../styles/carrito.module.css"
import Image from "next/image"


function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {

    const [ total, setTotal ] = useState(0)

    useEffect(() => {
        // reduce es un array method que calcula un total y toma dos parametros el total global y el producto actual, es de los pocos metodos que se pueden usar con un arrow function
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])

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
                                        <p><span className={styles.nombre}>{producto.nombre}</span></p>
                                        <p>Precio: <span className={styles.precio} >${producto.precio}</span></p>
                                        <div className={styles.cantidad} >
                                            <p>Cantidad: </p>
                                            <select
                                                className={styles.select}
                                                onChange={e => actualizarCantidad({
                                                    id:producto.id,
                                                    cantidad: +e.target.value,
                                                })}
                                                value={producto.cantidad}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        <p className={styles.subtotal}>Subtotal: <span>${producto.cantidad * producto.precio}</span></p>
                                    </div>

                                    <button
                                        className={styles.eliminar}
                                        type='button'
                                        onClick={() => eliminarProducto(producto.id)}
                                    >
                                        x
                                    </button>

                                </div>
                            ))

                        )}

                    </div>

                    <aside className={styles.resumen}>
                        <h3>Resumen del pedido</h3>
                        <p>Total a pagar: ${total}</p>
                    </aside>
                </div>
            </main>

        </Layout>
    )
}

export default Carrito