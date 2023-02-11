import Image from 'next/image'

function Header() {
  return (
    
    <header>
      <div className="contenedor">
        <Image src='/img/logo.svg' width={300} height={40} alt='logotipo GuitarLa' />
      </div>
    </header>
  )
}

export default Header