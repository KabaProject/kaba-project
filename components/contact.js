import { IconLink } from "."
import styles from '../styles/components/contact.module.scss'

// ICONS
import facebookIcon from '@iconify/icons-simple-icons/facebook'
import linkedinIcon from '@iconify/icons-simple-icons/linkedin'
import instagramIcon from '@iconify/icons-simple-icons/instagram'
import githubIcon from '@iconify/icons-simple-icons/github'
import behanceIcon from '@iconify/icons-simple-icons/behance'

const Contact = () => {
    return(
        <section className={`${styles.wrapper} wrapper relative z-0`}>
            <div className={`${styles.container} flex flex-col w-full pt-40 pb-32 relative`}>
                <h2 className="text-6xl uppercase font-bold">
                    <span className="text-4xl normal-case">
                        Hablemos sobre
                    </span>
                    <br />
                    Tu gran idea
                </h2>

                <p className="text-xl w-6/12 mt-4">
                    Demosle forma a ese proyecto para que podamos crear algo increble juntos y logre cumplir con lo que buscas.
                </p>

                <h3 className="text-3xl font-medium mt-10">
                    Enviame un mensaje a
                </h3>

                <a href="" className="text-3xl mt-4">
                    > kabaproject@outlook.es
                </a>

                <h3 className="text-3xl font-medium mt-6">
                    O por mis redes sociales
                </h3>

                <div className="flex gap-x-6 mt-4">
                <IconLink
                    icon = {facebookIcon}
                    link = {"https://www.facebook.com/mariohdezlife/"}
                />
                <IconLink
                    icon = {linkedinIcon}
                    link = {"https://www.linkedin.com/in/mariohdezdev/"}
                />
                <IconLink
                    icon = {githubIcon}
                    link = {"https://github.com/KabaProject"}
                />
                <IconLink
                    icon = {behanceIcon}
                    link = {"https://www.behance.net/kaba-project"}
                />
                <IconLink
                    icon = {instagramIcon}
                    link = {"https://www.instagram.com/mariohdezdev/"}
                />
                </div>
            
                <img 
                    src="/Light.svg" 
                    alt="" 
                    className={`${styles.image} absolute right-5 top-0`} 
                />
            </div>
        </section>
    )
}

export default Contact