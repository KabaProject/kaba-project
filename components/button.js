import Link from 'next/link'
import styles from '../styles/components/button.module.scss'

const Button = ({link, primary, secondary, children, className, small}) => {
    return(
        <Link href={link ?? '#'}>
            <a 
            className={
            `${
                primary ? styles.primary : secondary ? styles.secondary : ''
            } ${
                className ?? ''
            } ${
                small ? 'text-base py-2 px-3' : 'text-xl py-3 px-8'
            } rounded shadow-lg font-medium`
            }>
                {children}
            </a>
        </Link>
    )
}

export default Button