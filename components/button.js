import Link from 'next/link'
import styles from '../styles/components/button.module.scss'

const Button = ({link, primary, secondary, children, className, small, internal}) => {
    
    if(internal) return (
        <Link href={link ?? '#'}>
            <a 
            className={
            `${
                primary ? styles.primary : secondary ? styles.secondary : ''
            } ${
                className ?? ''
            } ${
                small ? 'text-base py-2 px-3' : 'text-xl py-3 px-8'
            } rounded shadow-lg text-center font-medium`
            }>
                {children}
            </a>
        </Link>
    )

    return (
        <a
        href={link ?? '#'}
        target="_blank"
        rel="noreferrer"
        className={
        `${
            primary ? styles.primary : secondary ? styles.secondary : ''
        } ${
            className ?? ''
        } ${
            small ? 'text-base py-2 px-3' : 'text-xl py-3 px-8'
        } rounded shadow-lg text-center font-medium`
        }>
            {children}
        </a>
    )
}

export default Button