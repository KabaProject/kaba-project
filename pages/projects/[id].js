import Footer from "../../components/footer"
import Nav from "../../components/nav"
import Cut from "../../components/cut"

const Project = () => {
    return(
        <>
            <header className="header">
                {/* NAV COMPONENT */}
                <Nav/>
                {/* CONTENT */}
                <section className="header__content">
                    <h1 className="header__title">
                        Nombre del Proyecto
                    </h1>
                    <p className="header__categories">

                    </p>
                    <p className="header__summary">
                        
                    </p>
                    <div className="header__buttons">
                        {/* RESPOSITORY */}
                        <a href="" className="header__cv button-secondary">Ver Repositorio</a>
                        {/* EXECUTE PROJECT */}
                        <a href="" className="header__cv button">Ejecutar Proyecto</a>
                    </div>
                </section>
            </header>
            
            {/* CUT UP */}
            <Cut className="bg-primary" up/>
            
            <main className="main">
                <section className="gallery" arial-label="Image Gallery">
                    <div className="gallery__mask">
                        <img src="" alt="" className="gallery__img" />
                    </div>
                    <div className="gallery__mask">
                        <img src="" alt="" className="gallery__img" />
                    </div>
                    <div className="gallery__mask">
                        <img src="" alt="" className="gallery__img" />
                    </div>
                </section>
                {/* CONTACT SECTION */}
            </main>

            {/* CUT DOWN */}
            <Cut className="bg-primary"/>
           
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