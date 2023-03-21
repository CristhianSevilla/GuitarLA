import '@/styles/globals.css'
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {

  // verificamos que el contenido del carrito en el LS
  //En caso de que window no este como undefined coloca lo que hay en locasStorage, en caso contrario coloca un []
  // JSON.parse convierte el string a un arreglo nuevamente
  // ?? [] en caso de que no exista carrito en el LS agrega un arreglo vacio []
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []

  const [carrito, setCarrito] = useState(carritoLS)

  //Hidratación
  const [paginaLista, setPaginaLista] = useState(false)

  useEffect( () => {
    setPaginaLista(true)
  }, [])

  
  useEffect( () => {
    //Guardamos en local lo que tenga el jason e carrito pero en string
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])


  const agregarCarrito = guitarra => {
    // Comprobar si la guitarra ya esta en el carrito
    //some nos retorna un true en caso de que al menos uno de los elemetos del arreglo cumpla la condicion
    //guitarraState es la guitarra que tenemos en el state (en memoria)
    //guitarra.id es la que tenemos en la url 
    if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      // Iterar para actualizar la cantidad
      //map copia el arreglo y crea uno nuevo
      //guitarraSatate es una variable diferente a la anterior ya que es local
      const carritoActualizado = carrito.map(guitarraState => {

        if (guitarraState.id === guitarra.id) {
          //Actualizamos la cantidad de guitarras
          guitarraState.cantidad = guitarra.cantidad;
          //Toma la cantidad anterior y suma la cantidad nueva
          // guitarraState.cantidad += guitarra.cantidad;
        }

        //Retornamos el nuevo arreglo con la cantidad actualizada
        return guitarraState;
      });

      // Se asigna el array actualizado al carrito
      setCarrito([...carritoActualizado]);

      localStorage.setItem('carrito', JSON.stringify(carrito));

    } else {

      // En caso de que el articulo no exista, es nuevo y se agrega
      setCarrito([...carrito, guitarra]);

      localStorage.setItem('carrito', JSON.stringify(carrito));

    }
  }


  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map( guitarraState => {
      if(guitarraState.id === guitarra.id ) {
        guitarraState.cantidad = parseInt( guitarra.cantidad )
      } 
      return guitarraState
    })
    
    setCarrito(carritoActualizado)

    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}

  return paginaLista ? <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
    eliminarProducto={eliminarProducto}
  /> : null
}
