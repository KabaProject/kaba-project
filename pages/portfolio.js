const Portfolio = () => {
    return(
        <>
            {/* NAV FLOATING COMPONENT */}
            {/* HEADER */}
            <header className="header">
                {/* NAV COMPONENT */}
                {/* CONTENT */}
                <section className="header__content">
                    <div className="header__stack">
                        <div className="header__back">
                            <img src="" alt="" className="header__img" />
                        </div>
                        <div className="header__front">
                            <h1 className="header__title">
                                Portafolio
                            </h1>
                            <a href="" className="header__cv button">
                                Descargar CV
                            </a>
                            <div className="header__social">
                                {/* SOCIAL NETWORKS LINKS */}

                            </div>
                        </div>
                    </div>
                </section>
            </header>

            <main className="main">
                <section className="projects">
                    <h2 className="projects__title">
                        Desarrollo Frontend
                    </h2>
                    <div className="projects__list">
                        {/* PROJECT ITEM COMPONENTS */}
                    </div>
                </section>
                {/* CONTACT SECTION */}
            </main>
            {/* FOOTER */}
        </>
    )
}
export default Portfolio