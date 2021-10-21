import { 
    Contact, Footer, Nav, Cut, Button, NavFixed
} from "../../components"
import prisma from '../../prisma/prisma'

// STYLES
import styles from '../../styles/pages/project.module.scss'

const Project = ({ data }) => {

    return(
        <>
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