import { Button, MenuButton, Menu, Shadow } from "."
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/components/nav.module.scss'

const Nav = ({className}) => {

    const [isOpen, setOpen] = useState(false)

    const onClickHandler = () => {
        setOpen(!isOpen)
    }

    useEffect(() => {
        const body = document.querySelector('body').classList
        
        if(isOpen){
            body.add('lock')
        }else{
            body.remove('lock')
        }
    }, [isOpen])

    return(
        <nav 
            className={`${styles.container} flex justify-between items-center ${className}`} 
            aria-label="Main Navbar"
        >
            {/* SHADOW */}
            <Shadow className={`${isOpen ? 'block' : 'hidden' }`}/>

            {/* MENU */}
            <Menu className="z-10" isOpen = {isOpen} onClick = {onClickHandler}/>

            <div className="nav__left flex items-end gap-12">
                <Link href="/">                
                    <a className="text-3xl lg:text-2xl font-medium uppercase">
                        Kaba
                    </a>
                </Link>
                <Link href="/#about">
                    <a className="text-lg hidden lg:block">Sobre Mí</a>
                </Link>
                <Link href="/portfolio">
                    <a className="text-lg hidden lg:block">Portafolio</a>
                </Link>
            </div>

            <div className="nav__right">
                <Button
                link="/#contact" 
                className="hidden lg:block"
                secondary small
                >
                    Contáctame
                </Button>
                <MenuButton
                    className="lg:hidden z-20"
                    onClick = {onClickHandler}
                    isOpen = {isOpen}
                />
            </div>
        </nav>
    )
    
}

export default Nav