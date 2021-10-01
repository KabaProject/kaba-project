import Link from 'next/link'

import styles from '../styles/components/project-block.module.scss'

const ProjectBlock = ({name, image, link}) => {
    return(
        <Link href={link ?? '/'}>
            <a className={`${styles.container} flex justify-center items-center relative overflow-hidden`}>
                <img src={image ?? "https://picsum.photos/550/340"} alt="" className="h-full" />
                <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full">
                    <p className="text-2xl px-8 py-2 bg-primary">
                        {name}
                    </p>
                </div>
            </a>
        </Link>
    )
}

export default ProjectBlock