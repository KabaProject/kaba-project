import Head from 'next/head'
import prisma from '../prisma/prisma'
import { 
  Nav, Cut, Footer, Button, IconLink, Skill, Field, ProjectItem, Contact, NavFixed
} from '../components'

// ICONS
import facebookIcon from '@iconify/icons-simple-icons/facebook'
import linkedinIcon from '@iconify/icons-simple-icons/linkedin'
import instagramIcon from '@iconify/icons-simple-icons/instagram'
import githubIcon from '@iconify/icons-simple-icons/github'
import behanceIcon from '@iconify/icons-simple-icons/behance'
import javascriptIcon from '@iconify/icons-simple-icons/javascript'
import reactIcon from '@iconify/icons-simple-icons/react'
import nodedotjsIcon from '@iconify/icons-simple-icons/nodedotjs'
import mysqlIcon from '@iconify/icons-simple-icons/mysql'
import expressIcon from '@iconify/icons-simple-icons/express'
import nextdotjsIcon from '@iconify/icons-simple-icons/nextdotjs'
import wordpressIcon from '@iconify/icons-simple-icons/wordpress'
import phpIcon from '@iconify/icons-simple-icons/php'
import mongodbIcon from '@iconify/icons-simple-icons/mongodb'
import gatsbyIcon from '@iconify/icons-simple-icons/gatsby'
import handlebarsdotjsIcon from '@iconify/icons-simple-icons/handlebarsdotjs'
import prismaIcon from '@iconify/icons-simple-icons/prisma';

// STYLES
import styles from '../styles/pages/home.module.scss'

export default function Home({projects}) {

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>Desarrollando nuevas ideas - KABA</title>
        <meta name="description" content="Me dedico a crear y mantener nuevos proyectos en el area web" />
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
        <meta property="og:title" content="Mario Hdez - Desarrollador Web" />
        <meta property="og:description" content="Conoce un poco sobre mi y a lo que me dedico en el mundo de la programacion web, si tienes una idea yo puedo ser quien te ayude a desarrollarla" />
        <meta property="og:image" content="/cover.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://kaba-project.vercel.app/" />
        <meta property="og:site_name" content="KABA PROJECT" />

        {/* TWITTER TAGS */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content=" Mario Hdez - Desarrollador Web"/>
        <meta name="twitter:description" content=" Conoce un poco sobre mi y a lo que me dedico en el mundo de la programacion web, si tienes una idea yo puedo ser quien te ayude a desarrollarla"/>
        <meta name="twitter:image" content="https://kaba-project.vercel.app/cover.png"/>
        <meta name="twitter:site" content="@MarioHdezDev"/>
        <meta name="twitter:creator" content="@MarioHdezDev"/>
      </Head>
      {/* NAV FLOATING COMPONENT */}
      <NavFixed/>

      <div className="clip-shadow">
      {/* HEADER */}
      <header className={styles.header}>
        {/* NAV COMPONENT */}
        <div className={`${styles.header__wrapper} w-full lg:pt-4 pt-6 px-4 pb-16 lg:pb-0`}>
        <Nav 
          className={styles.header__nav} 
        />
        {/* CONTENT */}
        <section className={styles.header__content}>
          <h1 className={`text-4xl lg:text-5xl font-bold leading-tight`}>
            <span className={`text-2xl lg:text-3xl font-normal`}>
              ¡Soy Mario Hernandez!
            </span>
            <br/> 
            Desarollador de Frontend y
            <br/>
            Backend para Webs
          </h1>
          <div className={`${styles.header__buttons} mt-6 flex flex-wrap`}>
            {/* DOWNLOAD CV */}
            <Button 
              link = {"/docs/my-cv-mario-hdez.pdf"}
              primary 
              className="lg:mr-6"
            >
              Descargar CV
            </Button>
            {/* SOCIAL NETWORKS LINKS */}
            <div className="header__icons flex mt-4 lg:mt-0 gap-3 lg:gap-5 items-center">
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
        <section id="about" className={`${styles.about__wrapper} wrapper`}>
          <div className={`${styles.about} w-full py-40 gap-y-16 lg:gap-y-9 gap-x-6 px-4 lg:px-0`}>
              <h2 className={`${styles.about__title} font-bold text-4xl lg:text-5xl uppercase`}>
                Unas cosas sobre mi
              </h2>
              <p className={`${styles.about__summary} text-lg self-center color-text-light -mt-6 lg:mt-0`}>
                Tengo 2 años dedicandome al desarrollo frontend y backend, el cual disfruto y continuo buscando nuevas formas de mejorar cada dia. Nacido en CDMX, Mexico y profundo amante de la programación, el diseño y del aprendizaje.
              </p>

            {/* FIELDS OF WORK */}
            <section className={`${styles.about__fields}`}>
              <h3 className="text-2xl lg:text-3xl font-bold mb-8 uppercase">
                Trabajo en...
              </h3>

              {/* FIELD COMPONENTS */}
              <div className="flex flex-col gap-y-8">
                <Field image="/Web.svg">
                  Web Design & Development
                </Field>
                <Field image="/Frontend.svg">
                  Frontend Development
                </Field>
                <Field image="/Backend.svg">
                  Backend Development
                </Field>
              </div>
            </section>
          
            {/* SKILLS */}
            <section className={`${styles.about__skills}`}>
              <h3 className="text-2xl lg:text-3xl font-bold mb-8 uppercase">
                Mis habilidades son...
              </h3>
              {/* SKILLS COMPONENTS */}
              <div className="flex lg:gap-x-6 gap-x-8 gap-y-8 flex-wrap">
                <Skill
                  name="Javascript"
                  icon={javascriptIcon}
                  junior
                  mid
                />
                <Skill
                  name="ReactJS"
                  icon={reactIcon}
                  junior
                  mid
                />
                <Skill
                  name="NodeJS"
                  icon={nodedotjsIcon}
                  junior
                  mid
                />
                <Skill
                  name="MySQL"
                  icon={mysqlIcon}
                  junior
                  mid
                />
                <Skill
                  name="NextJS"
                  icon={nextdotjsIcon}
                  junior
                  mid
                />
                <Skill
                  name="ExpressJS"
                  icon={expressIcon}
                  junior
                  mid
                />
              </div>
            </section>

            {/* LEARNING */}
            <section className={`${styles.about__learning}`}>
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 uppercase">
              Estoy aprendiendo...
            </h3>
            {/* SKILLS COMPONENTS */}
            <div className="flex lg:gap-x-6 gap-x-8 gap-y-8 flex-wrap">
                <Skill
                  name="Wordpress"
                  icon={wordpressIcon}
                  junior
                />
                <Skill
                  name="PHP"
                  icon={phpIcon}
                  junior
                />
                <Skill
                  name="MongoDB"
                  icon={mongodbIcon}
                  junior
                />
                <Skill
                  name="Gatsby"
                  icon={gatsbyIcon}
                  junior
                />
                <Skill
                  name="HandleBars"
                  icon={handlebarsdotjsIcon}
                  junior
                />
                <Skill
                  name="Prisma"
                  icon={prismaIcon}
                  junior
                />
              </div>
          </section>
          </div>
        </section>
        
        <div className="clip-shadow relative z-10">

          {/* CUT UP */}
          <Cut className="bg-primary" up/>

          <section className={`${styles.portfolio__wrapper} wrapper`}>
            <div className={`${styles.portfolio} w-full w-max-sm py-16 lg:py-24 gap-y-12 lg:gap-y-14 gap-x-6 px-4 lg:px-0`}>
              <h2 className={`${styles.portfolio__title} font-bold text-4xl lg:text-5xl uppercase`}>
                Este es mi trabajo
              </h2>

              <p className={`${styles.portfolio__summary} text-lg self-center color-text-light -mt-6 lg:mt-0`}>
                Busco crear soluciones a problemas que me enfrento en mi día a día esperando que pueda ser de ayuda a otras personas. Además de realizar proyectos para aquellos clientes que se vean interesados en desarrollar sus ideas conmigo.
              </p>

              <section className={`${styles.portfolio__projects} gap-y-4`} aria-label="Projects">
                {/* PROJECT ITEM COMPONENTS */}
                
                {
                  projects.map( project => {
                    return(
                      <ProjectItem
                        key = {project.id}
                        link = {`/projects/${project.id}`}
                        name = {project.name}
                        image = {project.cover ? `/shots/${project.cover}` : null}
                        {...project.types}
                      />
                    )
                  })
                }
                
              </section>
            </div>
          </section>

          <section className={`${styles.cta__wrapper} wrapper`}>
              <div className={`${styles.cta} flex flex-wrap items-center w-full justify-between pt-6 pb-12 px-4 lg:px-0`}>
                <h2 className="text-4xl mb-6 lg:mb-0">
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

export const getStaticProps = async () => {
    const projects = await prisma.projects.findMany({
      select:{
        id: true,
        name: true,
        types:{
          select: {
            name: true,
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

    for(const project of projects){
      const types = getTypes(project.types.name)
      const cover = await prisma.gallery.findFirst({
            where:{
              project_id: project.id,
              is_cover: 1
            },
            select:{
              file: true
            }
      })

      project.types = types
      project.cover = cover ? cover.file : null
    }


    return {
      props: {
        projects
      }
    }
}