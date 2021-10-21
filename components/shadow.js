import styles from '../styles/components/shadow.module.scss'

const Shadow = ({ className }) => {
    return(
        <div className={`${styles.container} fixed top-0 left-0 right-0 bottom-0 w-full min-h-screen ${className}`}>
        </div>
    )
}

export default Shadow