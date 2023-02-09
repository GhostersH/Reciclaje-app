import Link from "next/link"
import styles from "../styles/Header.module.css"
import Image from 'next/image'

const header = () => {
    return (
        <header className={styles.header}>

            <div className="contenedor" ></div>

            <div className={styles.barra}>

                <Link href="/">
                    <Image width={100} height={100} src="/img/logoWhite.png" alt="Imagen Logo" />


                </Link>

                <nav className={styles.navegacion}>
                

                    <Link href="/nosotros"> 
                    Nosotros
                    </Link>

                    <Link href="/blog">
                        Blog
                    </Link>

             


                </nav>


            </div>


        </header>
    )
}

export default header