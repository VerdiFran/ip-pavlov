import React from 'react'
import styles from './Menu.module.scss'
import {NavLink} from 'react-router-dom'
import {TO_ABOUT_COMPANY, TO_CATALOG, TO_CONTACTS, TO_HOME, TO_PARTNERS} from '../../../routes'
import useVisible from '../../../hooks/useVisible'
import CatalogSubmenuContainer from './CatalogSubmenu/CatalogSubmenuContainer'

/**
 * Menu component
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = () => {
    const {ref, isVisible, setIsVisible} = useVisible(false, 'mouseout')

    return (
        <nav className={styles.navPanelContainer}>
            <div className={styles.navButton}>
                <NavLink
                    to={TO_HOME}
                    activeClassName={styles.active}
                    data-text="Главная"
                    exact
                >Главная</NavLink>
            </div>
            <div className={styles.navButton}>
                <NavLink
                    to={TO_ABOUT_COMPANY}
                    activeClassName={styles.active}
                    data-text="О компании"
                >О компании</NavLink>
            </div>
            <div className={styles.navButton} ref={ref} onMouseOver={() => {setIsVisible(true)}}>
                <NavLink
                    to={TO_CATALOG}
                    activeClassName={styles.active}
                    data-text="Каталог"
                >Каталог</NavLink>
                {
                    isVisible && <CatalogSubmenuContainer/>
                }
            </div>
            <div className={styles.navButton}>
                <NavLink
                    to={TO_CONTACTS}
                    activeClassName={styles.active}
                    data-text="Контакты"
                >Контакты</NavLink>
            </div>
            <div className={styles.navButton}>
                <NavLink
                    to={TO_PARTNERS}
                    activeClassName={styles.active}
                    data-text="Партнеры"
                >Партнеры</NavLink>
            </div>
        </nav>
    )
}

export default Menu
