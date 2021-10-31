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
        <section id="contact" className={`${styles.wrapper} wrapper relative z-0`}>
            <div className={`w-max-sm flex flex-col w-full pt-96 lg:pt-40 pb-20 lg:pb-32 relative px-4 lg:px-0`}>
                <h2 className="text-5xl lg:text-6xl uppercase font-bold">
                    <span className="text-3xl lg:text-4xl normal-case block -mb-8">
                        Hablemos sobre
                    </span>
                    <br />
                    Tu gran idea
                </h2>

                <p className="text-xl lg:w-6/12 mt-4">
                    Demosle forma a ese proyecto para que podamos crear algo increble juntos y logre cumplir con lo que buscas.
                </p>

                <h3 className="text-2xl lg:text-3xl font-medium mt-10">
                    Enviame un mensaje a
                </h3>

                <a href="mailto:kabaproject@outlook.es" className="text-2xl lg:text-3xl mt-4">
                &gt; kabaproject@outlook.es
                </a>

                <h3 className="text-2xl lg:text-3xl font-medium mt-6">
                    O por mis redes sociales
                </h3>

                <div className="flex gap-x-4 lg:gap-x-6 mt-4">
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
                    className={`${styles.image} absolute right-0 lg:right-5 top-0`} 
                />
            </div>
        </section>
    )
}

export default Contact