import Link from 'next/Link'
import Layout from '@/components/layout'

function Nosotros() {
    return (

        <>

            <Layout
                title={'Nosotros'}
                description={'Acerca de nosotros, Guitar los Angeles, tienda de música'}
            >

                <div>Nosotros</div>

                <Link href="/">Inicio</Link>

            </Layout>



        </>
    )
}

export default Nosotros