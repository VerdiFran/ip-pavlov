import React from 'react'
import styles from './Menu.module.scss'
import {NavLink} from 'react-router-dom'

/**
 * Menu component
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = () => {
    return (
        <nav className={styles.navPanelContainer}>
            <div className={styles.navButton}>
                <NavLink to="#">Главная</NavLink>
            </div>
            <div className={styles.navButton}>
                <NavLink to="#">О компании</NavLink>
            </div>
            <div className={styles.navButton}>
                <NavLink to="#">Каталог</NavLink>
            </div>
            <div className={styles.navButton}>
                <NavLink to="#">Контакты</NavLink>
            </div>
            <div className={styles.navButton}>
                <NavLink to="#">Партнеры</NavLink>
            </div>
        </nav>
    )
}

export default Menu
