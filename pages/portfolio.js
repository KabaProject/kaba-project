import { 
    Contact, Nav, Cut, Footer, Button, IconLink, ProjectBlock, NavFixed
} from "../components"
import prisma from "../prisma/prisma"

// STYLES
import styles from '../styles/pages/portfolio.module.scss'

// ICONS
import facebookIcon from '@iconify/icons-simple-icons/facebook'
import linkedinIcon from '@iconify/icons-simple-icons/linkedin'
import instagramIcon from '@iconify/icons-simple-icons/instagram'
import githubIcon from '@iconify/icons-simple-icons/github'
import behanceIcon from '@iconify/icons-simple-icons/behance'

const ProjectsByType = ({ className, title, projects }) => {

    if(projects.length <= 0) return null

    return(
        <section className={`${styles.projects__wrapper} wrapper ${className}`}>
            <div className="w-full w-max-sm flex flex-col items-center gap-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold capitalize">
                    { title }
                </h2>
                <div className={`${styles.projects__list} gap-4 mt-6 lg:mt-12 px-4 lg:px-0`}>  
                    {
                        projects.map( project => (
                            <ProjectBlock
                                key={ project.id }
                                name={ project.name }
                                link={ `/projects/${project.id}` }
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

const Portfolio = ({ projects }) => {
    return(
        <>
            {/* NAV FLOATING COMPONENT */}
            <NavFixed className={`${styles.nav__bg}`}/>
            {/* HEADER */}
            <header className={`${styles.nav__wrapper} wrapper pt-6 px-4 lg:px-0`}>
                <div className={`${styles.nav} w-max-lg w-full`}>
                {/* NAV COMPONENT */}
                <Nav className={`${styles.nav__bg} relative z-20`}/>
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
                            <h1 className="uppercase text-9xl font-bold mt-20 text-shadow-2xl hidden lg:block">
                                Portafolio
                            </h1>
                            <h1 className="uppercase text-7xl font-bold -mt-16 text-shadow-2xl text-center block lg:hidden">
                                Porta- <br /> folio
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

                {/* <ProjectsByType 
                    className="pt-40 lg:pt-64 pb-10"
                    projects = {projects.web}
                />

                <ProjectsByType 
                    className="py-10"
                    projects = {projects.front}
                />

                <ProjectsByType 
                    className="pt-10 pb-20"
                    projects = {projects.back}
                /> */}
                
                <ProjectsByType 
                    className="pt-40 lg:pt-64 pb-40"
                    projects = {projects.design}
                    title = 'Diseños Web'
                />
                
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

export const getStaticProps = async () => {

    const rows = await prisma.projects.findMany({
        select:{
            id: true,
            name: true,
            type_id: true,
            link: true
        }
    })

    const projects = {
        front: rows.filter(project => project.type_id === 1),
        back: rows.filter(project => project.type_id === 2),
        web: rows.filter(project => project.type_id === 3),
        design: rows.filter(project => project.type_id === 4)
    }

    return {
        props: {
            projects
        } 
    }

}

export default Portfolio