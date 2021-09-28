import { Button } from "."
import styles from '../styles/components/nav.module.scss'

const Nav = ({className}) => {

    return(
        <nav 
            className={`${styles.container} ${className} flex justify-between items-center`} 
            aria-label="Main Navbar"
        >
            <div className="nav__left flex items-end gap-12">
                <a href="" className="text-2xl font-medium uppercase">
                    Kaba
                </a>
                <a href="" className="text-lg">Sobre Mí</a>
                <a href="" className="text-lg">Portafolio</a>
            </div>
            <div className="nav__right">
                <Button secondary small>
                    Contáctame
                </Button>
            </div>
        </nav>
    )
    
}

export default Nav