import { useState, useEffect } from "react"

const ScrollTracker = () => {
    const [scrollPos, setScrollPos] = useState(0)

    const handleScroll = () => {
        setScrollPos(Math.floor(window.scrollY))
    }

    useEffect(() => {
        if(typeof window !== 'undefined'){
            window.addEventListener('scroll', handleScroll)
        }
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return scrollPos
}

export default ScrollTracker;