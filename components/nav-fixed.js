import { Nav } from '.'
import scrollTracker from '../lib/scroll'
import styles from '../styles/components/nav-fixed.module.scss'

const NavFixed = ({ className }) => {

    return(
        <div className={`${styles.wrapper} ${ scrollTracker() >  400 ? styles.show : styles.hide } fixed w-full pt-6 pb-4 px-4 wrapper z-50 ${className}`}>
            <div className={`${styles.container} w-max-lg w-full`}>
                <Nav 
                    className={`${styles.nav}`}
                />
            </div>
        </div>
    )
}

export default NavFixed