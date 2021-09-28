import { Icon } from '@iconify/react'
import hacktheboxIcon from '@iconify/icons-simple-icons/hackthebox'
import Link from 'next/link'
import styles from '../styles/components/icon-link.module.scss'
const IconLinkExternal = ({link, iconClasses, className, icon}) => {
    return(
        <a 
            href={link ?? '#'} 
            className={`${styles.container} ${className}`}
        >
            <Icon 
                className={`${styles.icon} ${iconClasses}`}
                icon={icon ?? hacktheboxIcon}
            />
        </a>
    )
}

const IconLinkInternal = ({link, iconClasses, className, icon}) => {
    return(
        <Link
            href={link ?? ''}
        >
            <a 
                className={`${styles.container} ${className}`}
            >
                <Icon 
                    className={`${styles.icon} ${colorClass}`}
                    icon={icon ?? hacktheboxIcon}
                />
            </a>
        </Link>
    )
}

const IconLink = ({internal, ...props}) => {
    return(
        internal ? <IconLinkInternal {...props}/> 
            : <IconLinkExternal {...props}/>
    )
}

export default IconLink