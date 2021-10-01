import styles from '../styles/components/field.module.scss'

const Field = ({children, image}) => {
    return(
        <div className="flex items-center gap-x-4 pr-8">
            <img src={image ?? 'https://picsum.photos/200'} alt="" className={`${styles.image}`} />
            <p className="text-2xl font-medium">
                {children}
            </p>
        </div>
    )
}

export default Field;