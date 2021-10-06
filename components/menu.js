import Link from 'next/link'
import styles from '../styles/components/menu.module.scss'

const Menu = ({ className, isOpen, onClick }) => {
    return(
        <section className={`${styles.container} ${isOpen ? styles.down : styles.up } w-full fixed flex flex-col gap-y-16 pt-6 pb-8 top-0 left-0 right-0 ${className}`}>
            <h2 className={`${styles.title} text-4xl font-medium text-center`}>Menú</h2>
            <div className="flex flex-col items-center gap-y-6">
                <Link href="/#about">
                    <a className={`${styles.links} text-3xl font-medium`}>Acerca de mí</a>
                </Link>
                <Link href="/portfolio">
                    <a className={`${styles.links} text-3xl font-medium`}>Portafolio</a>
                </Link>
                <a href="#contact" onClick={onClick} className={`${styles.links} text-3xl font-medium`}>Contacto</a>
            </div>
        </section>
    )
}

export default Menu