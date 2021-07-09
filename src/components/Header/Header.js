import React, {useEffect, useState} from 'react'
import Menu from './Menu/Menu'
import styles from './Header.module.scss'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import CompactMenu from './CompactMenu/CompactMenu'
import useDebounce from '../../hooks/useDebounce'
import {NavLink} from 'react-router-dom'
import {TO_HOME} from '../../routes'

/**
 * Header component with logo and navigation panel
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () => {
    const [isCompact, setIsCompact] = useState(false)

    const {width} = useWindowDimensions()

    useEffect(() => {
        if (width <= 800) {
            setIsCompact(true)
        } else {
            setIsCompact(false)
        }
    }, [width])

    const [isOpened, setIsOpened] = useState(false)
    const [compactClassnames, setCompactClassnames] = useState([styles.closedCompactMenu])
    const [compactMenuContainerClassnames, setCompactMenuContainerClassnames] = useState([])

    const handleClick = () => {
        setIsOpened(isOpened => !isOpened)
    }

    useEffect(() => {
        setCompactClassnames(() => isOpened ? [styles.compactMenu] : [styles.closedCompactMenu])
        setCompactMenuContainerClassnames(() => isOpened ? [styles.compactMenuContainer] : [])
    }, [isOpened])

    const [headerClassnames, setHeaderClassnames] = useState([styles.headerContainer])

    const [winScroll, setWinScroll] = useState(0)

    const debouncedWinScroll = useDebounce(winScroll, 100)

    useEffect(() => {
        const handleScroll = () => {
            setWinScroll(document.body.scrollTop || document.documentElement.scrollTop)
        }

        window.addEventListener('scroll', handleScroll)
    })

    useEffect(() => {
        if (debouncedWinScroll >= 120) {
            setHeaderClassnames([styles.fixedHeader])
        } else {
            setHeaderClassnames([styles.headerContainer])
        }
    }, [debouncedWinScroll])

    return (
        <div className={headerClassnames.join(' ')}>
            <div className={styles.logoContainer}>
                <NavLink to={TO_HOME}>
                    <div className={styles.headerPolygon}>
                        <span>ИП Павлов</span>
                    </div>
                </NavLink>
            </div>
            {
                isCompact
                    ? <CompactMenu/>
                    : <Menu/>
            }
        </div>
    )
}

export default Header
