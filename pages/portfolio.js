import Head from "next/head"

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
                                image={ project.cover ? `/shots/${project.cover}` : null }
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

const Portfolio = ({ sections }) => {
    return(
        <>
            {/* HEAD */}
            <Head>
                <meta charSet="utf-8"/>
                <title>Todos mis trabajos - KABA&apos;s Portfolio</title>
                <meta name="description" content="Te invito a ver mi trabajo hecho a travez de mi carrera como desarrollador web y alguna que otra cosita que se me hizo interesante de mostrar, espero que lo disfrutes" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                {/* Favicon */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg"/>
                <link rel="alternate icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="alternate icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#3c096c"/>
                <link rel="shortcut icon" href="/favicon/favicon.ico"/>
                <meta name="apple-mobile-web-app-title" content="KABA"/>
                <meta name="application-name" content="KABA"/>
                <meta name="msapplication-TileColor" content="#603cba"/>
                <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
                <meta name="theme-color" content="#ffffff"/>

                {/* OPEN GRAPH TAGS */} 
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Todos mis trabajos - KABA PORTFOLIO" />
                <meta property="og:description" content="Te invito a ver mi trabajo hecho a travez de mi carrera como desarrollador web y alguna que otra cosita que se me hizo interesante de mostrar, espero que lo disfrutes" />
                <meta property="og:image" content="/cover.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://kaba-project.vercel.app/" />
                <meta property="og:site_name" content="KABA PROJECT" />

                {/* TWITTER TAGS */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content=" Todos mis trabajos - KABA PORTFOLIO"/>
                <meta name="twitter:description" content="Te invito a ver mi trabajo hecho a travez de mi carrera como desarrollador web y alguna que otra cosita que se me hizo interesante de mostrar, espero que lo disfrutes"/>
                <meta name="twitter:image" content="https://kaba-project.vercel.app/cover.png"/>
                <meta name="twitter:site" content="@MarioHdezDev"/>
                <meta name="twitter:creator" content="@MarioHdezDev"/>
            </Head>

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
                            <Button 
                                link = {"/docs/my-cv-mario-hdez.pdf"}
                                primary 
                                className="mt-8"
                            >
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
                    projects = {sections.design}
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

    const projects = await prisma.projects.findMany({
        select:{
            id: true,
            name: true,
            type_id: true,
            link: true
        }
    })

    for(const project of projects){
        const cover = await prisma.gallery.findFirst({
              where:{
                project_id: project.id,
                is_cover: 1
              },
              select:{
                file: true
              }
        })

        project.cover = cover ? cover.file : null    
    }

    const sections = {
        front: projects.filter(project => project.type_id === 1),
        back: projects.filter(project => project.type_id === 2),
        web: projects.filter(project => project.type_id === 3),
        design: projects.filter(project => project.type_id === 4)
    }

    return {
        props: {
            sections
        } 
    }

}

export default Portfolio