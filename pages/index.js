import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Nav from '../components/nav'
import Cut from '../components/cut'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Desarrollando nuevas ideas - KABA</title>
        <meta name="description" content="Me dedico a crear y mantener nuevos proyectos en el area web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAV FLOATING COMPONENT */}

      {/* HEADER */}
      <header className="header">
        {/* NAV COMPONENT */}
        <Nav/>
        {/* CONTENT */}
        <section className="header__content">
          <h1 className="header__title">
            <span className="header__subtitle">
              ¡Soy Mario Hernandez!
            </span>
            <br/> 
            Desarollo de Frontend y
            <br/>
            Backend para Webs
          </h1>
          <div className="header__buttons">
            {/* DOWNLOAD CV */}
            <a href="" className="header__cv button">Descargar CV</a>
            {/* SOCIAL NETWORKS LINKS */}
          </div>
        </section>
      </header>
    
      {/* CUT DOWN */}
      <Cut className="bg-primary"/>

      {/* MAIN */}
      <main className="main">
        {/* ABOUT */}
        <section className="about section">
          <header className="about__header section__header">
            <h2 className="about__title section__title">
              Unas cosas sobre mi
            </h2>
            <p className="about__summary section__summary">
              Tengo 2 años dedicandome al desarrollo frontend y backend, el cual disfruto y continuo buscando nuevas formas de mejorar cada dia. Nacido en CDMX, Mexico y profundo amante de la programación, el diseño y del aprendizaje.
            </p>
          </header>

          {/* FIELDS OF WORK */}
          <section className="about__fields">
            <h3 className="about__subtitle">
              Trabajo en...
            </h3>

            {/* FIELD COMPONENTS */}
            <div className="field">
              <div className="field__mask">
                <img src="" alt="" className="field__img" />
                <p className="field__text"></p>
              </div>
            </div>
          </section>
        
          {/* SKILLS */}
          <section className="about__skills">
            <h3 className="about__subtitle">
              Mis habilidades son...
            </h3>
            {/* SKILLS COMPONENTS */}
            <div className="about__h-list">

            </div>
          </section>

          {/* LEARNING */}
          <section className="about__learning">
            <h3 className="about__subtitle">
              Estoy aprendiendo...
            </h3>
            {/* SKILLS COMPONENTS */}
            <div className="about__h-list">
              
            </div>
          </section>

        </section>
        
        {/* CUT UP */}
        <Cut className="bg-primary" up/>

        <section className="portfolio section">
          
          
          <header className="portfolio__header section__header">
            <h2 className="portfolio__title section__title">
              Unas cosas sobre mi
            </h2>
            <p className="portfolio__summary section__summary">
              Tengo 2 años dedicandome al desarrollo frontend y backend, el cual disfruto y continuo buscando nuevas formas de mejorar cada dia. Nacido en CDMX, Mexico y profundo amante de la programación, el diseño y del aprendizaje.
            </p>
          </header>

          <section className="portfolio__projects" aria-label="Projects">
            {/* PROJECT ITEM COMPONENTS */}

          </section>

          <footer className="portfolio__footer">
            <h3 className="portfolio__text">
              <b>¿Te gustó?</b> Nice, te invito a que veas más de ellos
            </h3>
            <a href="" className="portfolio__see-more button">
              Ver Portafolio
            </a>
          </footer>

          
        </section>

        {/* CONTACT SECTION */}
      </main>

      {/* CUT DOWN */}
      <Cut className="bg-primary-light"/>
       
      {/* FOOTER */}
      <Footer/>

    </>
  )
}
