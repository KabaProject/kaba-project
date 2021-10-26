import Head from "next/head"

import { 
    Contact, Footer, Nav, Cut, Button, NavFixed
} from "../../components"
import prisma from '../../prisma/prisma'

// STYLES
import styles from '../../styles/pages/project.module.scss'

const Project = ({ data }) => {

    return(
        <>
            {/* HEAD */}
            <Head>
                <meta charSet="utf-8"/>
                <title>{ `${data.name} - KABA's Project` }</title>
                <meta name="description" content={`${data.description ? data.description.slice(0, 50) : "No hay descripción"}...`} />
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
                <meta property="og:title" content={ `${data.name} - KABA's Project` } />
                <meta property="og:description" content={`${data.description ? data.description.slice(0, 200) : "No hay descripción"}...`} />
                <meta property="og:image" content="/cover.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://kaba-project.vercel.app/" />
                <meta property="og:site_name" content="KABA PROJECT" />

                {/* TWITTER TAGS */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={ `${data.name} - KABA's Project` }/>
                <meta name="twitter:description" content={`${data.description ? data.description.slice(0, 200) : "No hay descripción"}...`}/>
                <meta name="twitter:image" content="/cover.png"/>
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
                                {data.name}
                            </h1>
                            <p className="text-2xl capitalize">
                                - {
                                    data.type === 'web' ? 'Web Development' :
                                    data.type === 'fronted' ? 'Frontend Development':
                                    data.type === 'backend' ? 'Backend Development':
                                                            'Web Design'
                                } -
                            </p>
                            <p className="text-lg lg:w-8/12 text-center">
                            {
                                data.description ?? 'No hay descripción'
                            }
                            </p>
                            <div className="flex gap-x-4 lg:gap-x-6 mt-8 lg:px-0">
                                {/* RESPOSITORY */}
                                <Button className="w-1/2 lg:w-auto" link={data.repo ?? '#'} secondary>
                                    Ver Repositorio
                                </Button>
                                {/* EXECUTE PROJECT */}
                                <Button className="w-1/2 lg:w-auto" link={data.link ?? '#'} primary>
                                    Ejecutar Proyecto
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* GALLERY */}
                    <section className={`${styles.gallery__wrapper} relative wrapper z-0 pb-20`}>
                        <div className={`${styles.gallery} px-4 lg:px-0 gap-6 lg:gap-4`} arial-label="Image Gallery">
                            <div className="overflow-hidden flex justify-center items-center">
                                <img src="https://picsum.photos/1000/550" alt="" className="object-cover h-full lg:width" />
                            </div>
                            <div className="overflow-hidden flex justify-center items-center h-full">
                                <img src="https://picsum.photos/480/300" alt="" className="object-cover h-full lg:width" />
                            </div>
                            <div className="overflow-hidden flex justify-center items-center h-full">
                                <img src="https://picsum.photos/480/300" alt="" className="object-cover h-full lg:width" />
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

    return{
        props: {
            data: {
                name: project.name,
                description: project.description,
                repo: project.repo,
                link: project.link,
                type: project.types.name
            }
        }
    }
} 


export default Project