import styles from '../styles/components/cut.module.scss'

const Cut = ({up, className}) => {
    return (
        <div className={`${styles.container} ${up ? styles.up : styles.down} ${className}`}>
        </div>
    )
}

export default Cut