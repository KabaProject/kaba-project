import { 
    Contact, Footer, Nav, Cut, Button, NavFixed
} from "../../components"

// STYLES
import styles from '../../styles/pages/project.module.scss'

const Project = () => {
    return(
        <>
            {/* NAV FLOATING COMPONENT */}
            <NavFixed/>

            <header className={`${styles.nav__wrapper} wrapper pt-6`}>
                <div className={`${styles.nav} px-4 lg:px-0 w-max-lg w-full`}>
                {/* NAV COMPONENT */}
                <Nav/>
                </div>
            </header>
            
            <main className="main">
                
                <div className="clip-shadow relative z-10">
                {/* CUT UP */}
                    <Cut className="bg-primary" up/>
        
                    <section className={`${styles.project__wrapper} relative wrapper z-10`}>
                        <div className={`${styles.project} w-max-sm w-full flex flex-col items-center gap-y-4 px-4 lg:px-0`}>
                            <h1 className="text-3xl lg:text-5xl text-center font-bold uppercase">
                                Project Name
                            </h1>
                            <p className="text-2xl">
                                Project Type
                            </p>
                            <p className="text-lg lg:w-8/12 text-center">
                            Eget mauris quis sit egestas sem blandit sagittis. Urna mauris a ultricies imperdiet at purus varius amet. Id senectus in amet, nibh sit eleifend. Cursus morbi scelerisque eu non in ullamcorper eu. Purus rutrum platea congue adipiscing et porta vel
                            </p>
                            <div className="flex gap-x-4 lg:gap-x-6 mt-8 lg:px-0">
                                {/* RESPOSITORY */}
                                <Button className="w-1/2 lg:w-auto" secondary>
                                    Ver Repositorio
                                </Button>
                                {/* EXECUTE PROJECT */}
                                <Button className="w-1/2 lg:w-auto" primary>
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

// export const getStaticPaths = async () => {
//     return{
//         paths: [],
//         fallback: false
//     }
// } 

// export const getStaticProps = async () => {
//     return{
//         props: {}
//     }
// } 


export default Project