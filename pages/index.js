import Head from 'next/head'
import { 
  Nav, Cut, Footer, Button, IconLink
} from '../components'

// ICONS
import facebookIcon from '@iconify/icons-simple-icons/facebook'
import linkedinIcon from '@iconify/icons-simple-icons/linkedin'
import instagramIcon from '@iconify/icons-simple-icons/instagram'
import githubIcon from '@iconify/icons-simple-icons/github'
import behanceIcon from '@iconify/icons-simple-icons/behance'

// STYLES
import styles from '../styles/pages/home.module.scss'

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
      <header className={styles.header}>
        {/* NAV COMPONENT */}
        <div className={styles.header__wrapper}>
        <Nav className={styles.header__nav}/>
        {/* CONTENT */}
        <section className={styles.header__content}>
          <h1 className={[/*styles.header__title,*/ "text-5xl font-bold leading-tight"]}>
            <span className={[/*styles.header__subtitle,*/ "text-3xl font-normal"]}>
              ¡Soy Mario Hernandez!
            </span>
            <br/> 
            Desarollador de Frontend y
            <br/>
            Backend para Webs
          </h1>
          <div className={`${styles.header__buttons} mt-6 flex`}>
            {/* DOWNLOAD CV */}
            <Button primary className="mr-6">
              Descargar CV
            </Button>
            {/* SOCIAL NETWORKS LINKS */}
            <div className="header__icons flex gap-5 items-center">
              <IconLink
                icon = {facebookIcon}
                link = {"https://www.facebook.com/mariohdezlife/"}
              />
              <IconLink
                icon = {linkedinIcon}
                link = {"https://www.linkedin.com/in/mariohdezdev/"}
              />
              <IconLink
                icon = {githubIcon}
                link = {"https://github.com/KabaProject"}
              />
              <IconLink
                icon = {behanceIcon}
                link = {"https://www.behance.net/kaba-project"}
              />
              <IconLink
                icon = {instagramIcon}
                link = {"https://www.instagram.com/mariohdezdev/"}
              />
            </div>
          </div>
        </section>
        </div>
      </header>
    
      {/* CUT DOWN */}
      <Cut className="bg-primary"/>

      {/* MAIN */}
      <main className={styles.main}>
        {/* ABOUT */}
        <section className="about">
          <header className="about__header">
            <h2 className="about__title">
              Unas cosas sobre mi
            </h2>
            <p className="about__summary">
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

        <section className="portfolio">
          
          
          <header className="portfolio__header section__header">
            <h2 className="portfolio__title">
              Unas cosas sobre mi
            </h2>
            <p className="portfolio__summary">
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
