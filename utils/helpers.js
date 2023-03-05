import Swal from "sweetalert2"

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones={
        year : 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}

export const mostrarAlerta = (titulo = '', mensaje = '', icono = '') =>{
    Swal.fire(titulo, mensaje, icono)
}