import Link from "next/link"
import Layout from "@/components/layout"

export default function Home() {
  return (
    <>

      <Layout
        
        title={"Inicio"}
        description={"Guitar los Angeles, Venta de guitarras, Blog de música y más"}
      >
        
        <Link href="/nosotros" >Nosotros</Link>

      </Layout>


    </>
  )
}
