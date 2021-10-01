import { Icon } from "@iconify/react"
import hacktheboxIcon from '@iconify/icons-simple-icons/hackthebox'

// STYLES
import styles from '../styles/components/skill.module.scss'

const Skill = ({icon, name, junior, mid, senior}) => {

    let level = []
    if(junior) level.push('Junior')
    if(mid) level.push('Mid')
    if(senior) level.push('Senior')

    level = level.join('/')

    if(level.length === 0) level = 'Nivel no dado'

    return(
        <div className={`${styles.container} flex items-center flex-col`}>
            <Icon
                icon = {icon ?? hacktheboxIcon}
                className={`${styles.icon} mb-2`}
            />
            <p className="text-lg font-medium">
                {name}
            </p>
            <p className="color-text-light">
                {level}
            </p>
        </div>
    )    
}

export default Skill