import Head from 'next/head'
import { 
  Nav, Cut, Footer, Button, IconLink, Skill, Field, ProjectItem, Contact
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
      <div className="clip-shadow">
      {/* HEADER */}
      <header className={styles.header}>
        {/* NAV COMPONENT */}
        <div className={`${styles.header__wrapper} w-full pt-4`}>
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
      </div>

      {/* MAIN */}
      <main className={styles.main}>
        {/* ABOUT */}
        <section className={`${styles.about__wrapper} wrapper`}>
          <div className={`${styles.about} w-full py-40 gap-y-9 gap-x-6`}>
              <h2 className={`${styles.about__title} font-bold text-5xl uppercase`}>
                Unas cosas sobre mi
              </h2>
              <p className={`${styles.about__summary} text-lg self-center color-text-light`}>
                Tengo 2 años dedicandome al desarrollo frontend y backend, el cual disfruto y continuo buscando nuevas formas de mejorar cada dia. Nacido en CDMX, Mexico y profundo amante de la programación, el diseño y del aprendizaje.
              </p>

            {/* FIELDS OF WORK */}
            <section className={`${styles.about__fields}`}>
              <h3 className="text-3xl font-bold">
                Trabajo en...
              </h3>

              {/* FIELD COMPONENTS */}
              <div className="flex flex-col gap-y-8 pt-8">
                <Field>
                  Web Design & Development
                </Field>
                <Field>
                  Frontend Development
                </Field>
                <Field>
                  Backend Development
                </Field>
              </div>
            </section>
          
            {/* SKILLS */}
            <section className={`${styles.about__skills}`}>
              <h3 className="text-3xl font-bold mb-8">
                Mis habilidades son...
              </h3>
              {/* SKILLS COMPONENTS */}
              <div className="flex gap-x-6 flex-wrap">
                <Skill
                  name="Javascript"
                  junior
                  mid
                />
                <Skill
                  name="ReactJS"
                  junior
                  mid
                />
                <Skill
                  name="NodeJS"
                  junior
                  mid
                />
                <Skill
                  name="MySQL"
                  junior
                  mid
                />
                <Skill
                  name="NextJS"
                  junior
                  mid
                />
                <Skill
                  name="ExpressJS"
                  junior
                  mid
                />
              </div>
            </section>

            {/* LEARNING */}
            <section className={`${styles.about__learning}`}>
            <h3 className="text-3xl font-bold mb-8">
              Estoy aprendiendo...
            </h3>
            {/* SKILLS COMPONENTS */}
            <div className="flex gap-x-6 flex-wrap">
                <Skill
                  name="Wordpress"
                  junior
                />
                <Skill
                  name="PHP"
                  junior
                />
                <Skill
                  name="MongoDB"
                  junior
                  mid
                />
                <Skill
                  name="Gatsby"
                  junior
                  mid
                />
                <Skill
                  name="HandleBars"
                  junior
                  mid
                />
              </div>
          </section>
          </div>
        </section>
        
        <div className="clip-shadow relative z-10">

          {/* CUT UP */}
          <Cut className="bg-primary" up/>

          <section className={`${styles.portfolio__wrapper} wrapper`}>
            <div className={`${styles.portfolio} w-full py-24 gap-y-14 gap-x-6`}>
              <h2 className={`${styles.portfolio__title} font-bold text-5xl uppercase`}>
                Este es mi trabajo
              </h2>

              <p className={`${styles.portfolio__summary} text-lg self-center color-text-light`}>
                Busco crear soluciones a problemas que me enfrento en mi día a día esperando que pueda ser de ayuda a otras personas. Además de realizar proyectos para aquellos clientes que se vean interesados en desarrollar sus ideas conmigo.
              </p>

              <section className={`${styles.portfolio__projects} gap-y-4`} aria-label="Projects">
                {/* PROJECT ITEM COMPONENTS */}
                <ProjectItem
                  name = "Project Name"
                  front
                />
                <ProjectItem
                  name = "Project Name"
                  front
                />
                <ProjectItem
                  name = "Project Name"
                  front
                />
                <ProjectItem
                  name = "Project Name"
                  front
                />
                <ProjectItem
                  name = "Project Name"
                  front
                />
                <ProjectItem
                  name = "Project Name"
                  front
                />
              </section>
            </div>
          </section>

          <section className={`${styles.cta__wrapper} wrapper`}>
              <div className={`${styles.cta} flex items-center w-full justify-between pt-6 pb-12`}>
                <h2 className="text-4xl">
                  <b>¿Te gustó?</b> Nice, te invito a que veas más de ellos
                </h2>
                <Button primary>
                  Ver Portafolio
                </Button>
              </div>
          </section>

          {/* CUT DOWN */}
          <Cut className="bg-primary-light"/>

        </div>

        {/* CONTACT SECTION */}
        <Contact/>
      </main>
       
      {/* FOOTER */}
      <Footer/>

    </>
  )
}
