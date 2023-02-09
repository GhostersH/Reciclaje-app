import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, pagina }) => {
    return (

        <div>

            <Head>
                <title>Reciclaje App - {pagina} </title>
                <meta name="description" content="Sitio Web de venta de reciclaje"></meta>
            </Head>


            <Header />
            {children}
            <Footer />


        </div>
    )
}

export default Layout