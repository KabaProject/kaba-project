const Portfolio = () => {
    return(
        <>
            <h1>Portafolio de Proyectos</h1>
        </>
    )
}

export const getStaticPaths = async () => {
    return{
        paths: [],
        fallback: false
    }
} 

export const getStaticProps = async () => {
    return{
        props: {}
    }
} 

export default Portfolio