import { 
    Contact, Nav, Cut, Footer, Button, IconLink, ProjectBlock
} from "../components"

// STYLES
import styles from '../styles/pages/portfolio.module.scss'

// ICONS
import facebookIcon from '@iconify/icons-simple-icons/facebook'
import linkedinIcon from '@iconify/icons-simple-icons/linkedin'
import instagramIcon from '@iconify/icons-simple-icons/instagram'
import githubIcon from '@iconify/icons-simple-icons/github'
import behanceIcon from '@iconify/icons-simple-icons/behance'

const Portfolio = () => {
    return(
        <>
            {/* NAV FLOATING COMPONENT */}
            {/* HEADER */}
            <header className={`${styles.nav__wrapper} wrapper pt-6`}>
                <div className={`${styles.nav} w-full`}>
                {/* NAV COMPONENT */}
                <Nav/>
                </div>
            </header>

           

            <main className="main">
                
                <div className="clip-shadow relative z-10">

                 {/* CUT UP */}
                <Cut className="bg-primary" up/>

                <section className={`wrapper relative z-10`}>
                    <div className={`${styles.header} relative`}>
                        <div className="absolute top-0 left-0 right-0">
                            <img src="/Portfolio.svg" alt="" className="w-full" />
                        </div>
                        <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center h-full">
                            <h1 className="uppercase text-9xl font-bold mt-20 text-shadow-2xl">
                                Portafolio
                            </h1>
                            <Button primary className="mt-8">
                                Descargar CV
                            </Button>
                            <div className="flex gap-x-4 mt-4">
                                {/* SOCIAL NETWORKS LINKS */}
                                <IconLink
                                    icon = {linkedinIcon}
                                    link = {"https://www.linkedin.com/in/mariohdezdev/"}
                                    iconClasses={"filter-shadow-lg"}
                                />
                                <IconLink
                                    icon = {githubIcon}
                                    link = {"https://github.com/KabaProject"}
                                    iconClasses={"filter-shadow-lg"}
                                />
                                <IconLink
                                    icon = {behanceIcon}
                                    link = {"https://www.behance.net/kaba-project"}
                                    iconClasses={"filter-shadow-lg"}
                                />
                                <IconLink
                                    icon = {instagramIcon}
                                    link = {"https://www.instagram.com/mariohdezdev/"}
                                    iconClasses={"filter-shadow-lg"}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`${styles.projects__wrapper} wrapper pt-64 pb-20`}>
                    <div className="w-full w-max-sm flex flex-col items-center gap-y-6">
                        <h2 className="text-5xl font-bold">
                            Desarrollo Web
                        </h2>
                        <div className={`${styles.projects__list} gap-4 mt-12`}>
                            {/* PROJECT ITEM COMPONENTS */}
                            <ProjectBlock
                                name="Project Name"
                            />
                            <ProjectBlock
                                name="Project Name"
                            />
                            <ProjectBlock
                                name="Project Name"
                            />
                            <ProjectBlock
                                name="Project Name"
                            />
                        </div>
                    </div>
                </section>
                <section className={`${styles.projects__wrapper} wrapper py-20`}>
                    <div className="w-full w-max-sm flex flex-col items-center gap-y-6">
                        <h2 className="text-5xl font-bold">
                            Desarrollo Frontend
                        </h2>
                        <div className={`${styles.projects__list} gap-4 mt-12`}>
                            {/* PROJECT ITEM COMPONENTS */}
                            <ProjectBlock
                                name="Project Name"
                            />
                            <ProjectBlock
                                name="Project Name"
                            />
                            <ProjectBlock
                                name="Project Name"
                            />
                            <ProjectBlock
                                name="Project Name"
                            />
                        </div>
                    </div>
                </section>
                <section className={`${styles.projects__wrapper} wrapper pt-20 pb-40`}>
                    <div className="w-full w-max-sm flex flex-col items-center gap-y-6">
                        <h2 className="text-5xl font-bold">
                            Desarrollo Backend
                        </h2>
                        <div className={`${styles.projects__list} gap-4 mt-12`}>
                            {/* PROJECT ITEM COMPONENTS */}
                            <ProjectBlock
                                name="Project Name"
                            />
                            <ProjectBlock
                                name="Project Name"
                            />
                            <ProjectBlock
                                name="Project Name"
                            />
                            <ProjectBlock
                                name="Project Name"
                            />
                        </div>
                    </div>
                </section>
                
                {/* CUT DOWN */}
                <Cut className="bg-primary"/>
                
                </div>

                {/* CONTACT SECTION */}
                <Contact/>
            
            </main>
            
            {/* FOOTER */}
            <Footer/>
        </>
    )
}
export default Portfolio