import styles from '../styles/components/footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return(
        <footer className={`${styles.wrapper} wrapper`}>
            <div className={`${styles.container} w-max-lg lg:flex lg:justify-between items-center w-full py-6 lg:py-4 px-4 lg:px-0 gap-y-6 lg:gap-y-2`}>
                <Link href="/">
                    <a className={`${styles.brand} text-xl font-medium`}>
                        KABA                
                    </a>
                </Link>
                <p className={`${styles.copy}`}>
                    Diseñado y Desarrollado por Mario Hdez
                </p>
                <div className={`${styles.lang} flex gap-x-2 uppercase`}>
                    <a href="" className="language">
                        English
                    </a>
                    <span className="divisor">
                        |
                    </span>
                    <a href="" className="language">
                        Español
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer