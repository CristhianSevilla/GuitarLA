import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {

    return (

        <Html>

            <Head>

                <meta name="description" content='Guitar Los Angeles, Venta de guitarras y blog de música' />
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" cross0rigin = {'true'} />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />

                <link rel='stylesheet' href='https://necolas.github.io/normalize.css/8.0.1/normalize.css' />
            </Head>

            <body>
                <Main/>
                <NextScript/>

            </body>

        </Html>


    )
}