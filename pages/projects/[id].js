import Head from "next/head"

import { 
    Contact, Footer, Nav, Cut, Button, NavFixed
} from "../../components"
import prisma from '../../prisma/prisma'

// STYLES
import styles from '../../styles/pages/project.module.scss'

const Project = ({ project }) => {

    console.log(project)

    return(
        <>
            {/* HEAD */}
            <Head>
                <meta charSet="utf-8"/>
                <title>{ `${project.name} - KABA's Project` }</title>
                <meta name="description" content={`${project.description ? project.description.slice(0, 50) : "No hay descripción"}...`} />
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
                <meta property="og:title" content={ `${project.name} - KABA's Project` } />
                <meta property="og:description" content={`${project.description ? project.description.slice(0, 200) : "No hay descripción"}...`} />
                <meta property="og:image" content="/cover.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://kaba-project.vercel.app/" />
                <meta property="og:site_name" content="KABA PROJECT" />

                {/* TWITTER TAGS */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={ `${project.name} - KABA's Project` }/>
                <meta name="twitter:description" content={`${project.description ? project.description.slice(0, 200) : "No hay descripción"}...`}/>
                <meta name="twitter:image" content="https://kaba-project.vercel.app/cover.png"/>
                <meta name="twitter:site" content="@MarioHdezDev"/>
                <meta name="twitter:creator" content="@MarioHdezDev"/>
            </Head>

            {/* NAV FLOATING COMPONENT */}
            <NavFixed/>

            <header className={`${styles.nav__wrapper} wrapper pt-6`}>
                <div className={`${styles.nav} px-4 lg:px-0 w-max-lg w-full`}>
                {/* NAV COMPONENT */}
                <Nav className="relative z-20"/>
                </div>
            </header>
            
            <main className="main">
                
                <div className="clip-shadow relative z-10">
                {/* CUT UP */}
                    <Cut className="bg-primary" up/>
        
                    <section className={`${styles.project__wrapper} relative wrapper z-10`}>
                        <div className={`${styles.project} w-max-sm w-full flex flex-col items-center gap-y-4 px-4 lg:px-0`}>
                            <h1 className="text-3xl lg:text-5xl text-center font-bold uppercase">
                                {project.name}
                            </h1>
                            <p className="text-2xl capitalize">
                                - {
                                    project.types.web ? 'Web Development' :
                                    project.types.front ? 'Frontend Development':
                                    project.types.back ? 'Backend Development':
                                    project.types.design ? 'Web Design': 'No Definido'                        
                                } -
                            </p>
                            <p className="text-lg lg:w-8/12 text-center">
                            {
                                project.description ?? 'No hay descripción'
                            }
                            </p>
                            <div className="flex gap-x-4 lg:gap-x-6 mt-8 lg:px-0">
                                {/* RESPOSITORY */
                                    project.repo ?
                                    <Button className="w-1/2 lg:w-auto" link={project.repo} secondary>
                                        Ver Repositorio
                                    </Button> : null
                                }
                                
                                {/* EXECUTE PROJECT */
                                    project.link ? 
                                    <Button className="w-1/2 lg:w-auto" link={project.link} primary>
                                        Ejecutar Proyecto
                                    </Button> : null
                                }
                                
                            </div>
                        </div>
                    </section>

                    {/* GALLERY */}
                    <section className={`${styles.gallery__wrapper} relative wrapper z-0 pb-20`}>
                        <div className={`${styles.gallery} px-4 lg:px-0 gap-6 lg:gap-4`} arial-label="Image Gallery">
                            <img src={project.cover ? `/shots/${project.cover}` : "https://picsum.photos/1000/550" } alt="" className="object-cover h-full w-full" />
                            {
                                project.gallery ? 
                                <img src={project.gallery[0] ? `/shots/${project.gallery[0]}` : "https://picsum.photos/480/300" } alt="" className="object-cover h-full w-full" />: null
                            }
                            {
                                project.gallery ? 
                                <img src={project.gallery[1] ? `/shots/${project.gallery[1]}` : "https://picsum.photos/480/300" } alt="" className="object-cover h-full w-full" /> : null
                            }
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

export const getStaticPaths = async () => {

    // Get projects id
    const rows = await prisma.projects.findMany({
        select: {
            id: true,
        }
    })

    const paths = rows.map(row => {
        let id = row.id
        return ({
            params: { id },
        })
    })

    return{
        paths,
        fallback: false
    }
} 

export const getStaticProps = async (context) => {

    const id = context.params.id

    // Get project content
    const project = await prisma.projects.findUnique({
        where:{
            id: id,
        },
        select:{
            name: true,
            description: true,
            repo: true,
            link: true,
            types: {
                select:{
                    name: true
                }
            }
        }
    })

    const getTypes = (name) => ({
        front: (name === 'frontend'),
        back: (name === 'backend'),
        web: (name === 'web'),
        design: (name === 'design'),
    })

    const types = getTypes(project.types.name)
    const gallery = await prisma.gallery.findMany({
            where:{
            project_id: project.id
            },
            select:{
            file: true,
            is_cover: true
            }
    })

    project.types = types
    if(gallery){
        project.cover = gallery.find(image => image.is_cover).file
        project.gallery = gallery.filter(image => !image.is_cover).map(image => image.file)
    }

    return{
        props: {
            project
        }
    }
} 


export default Project