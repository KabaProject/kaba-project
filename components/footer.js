import styles from '../styles/components/footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return(
        <footer className={`${styles.wrapper} wrapper`}>
            <div className={`${styles.container} flex justify-between items-center w-full py-4`}>
                <Link href="/">
                    <a className="text-xl font-medium">
                        KABA                
                    </a>
                </Link>
                <p className="copyright">
                    Diseñado y Desarrollado por Mario Hdez
                </p>
                <div className="languages flex gap-x-2 uppercase">
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