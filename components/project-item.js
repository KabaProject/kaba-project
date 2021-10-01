import Link from 'next/link'

import styles from '../styles/components/project-item.module.scss'

const ProjectItem = ({name, front, back, web, design, image, link}) => {
    return(
        <Link href={link ?? '/'}>
            <a className={`${styles.container} flex justify-center items-center relative overflow-hidden`}>
                <img src={image ?? "https://picsum.photos/360/240"} alt="" className="h-full" />
                <p className="absolute bg-primary text-lg bottom-6 left-0 pl-6 pr-4 py-1.5">
                    {name}
                </p>
                <p className="absolute bg-primary text-base top-6 right-0 pl-4 pr-6 py-1.5">
                    {
                        front ? 'Frontend' :
                        back ? 'Backend' :
                        web ? 'Web Dev' :
                        design ? 'Design' :
                        'No Indicado'
                    }
                </p>
            </a>
        </Link>
    )
}

export default ProjectItem