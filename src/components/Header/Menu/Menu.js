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
const Menu = ({style}) => {
    const {ref, isVisible, setIsVisible} = useVisible(false, 'mouseout')

    const menuStyles = style ?? styles

    return (
        <nav className={menuStyles.navPanelContainer}>
            <div className={menuStyles.navButton}>
                <NavLink
                    to={TO_HOME}
                    activeClassName={menuStyles.active}
                    data-text="Главная"
                    exact
                >Главная</NavLink>
            </div>
            <div className={menuStyles.navButton}>
                <NavLink
                    to={TO_ABOUT_COMPANY}
                    activeClassName={menuStyles.active}
                    data-text="О компании"
                >О&nbsp;компании</NavLink>
            </div>
            <div className={menuStyles.navButton} ref={ref} onMouseOver={() => {setIsVisible(true)}}>
                <NavLink
                    to={TO_CATALOG}
                    activeClassName={menuStyles.active}
                    data-text="Каталог"
                >Каталог</NavLink>
                {
                    isVisible && <CatalogSubmenuContainer/>
                }
            </div>
            <div className={menuStyles.navButton}>
                <NavLink
                    to={TO_CONTACTS}
                    activeClassName={menuStyles.active}
                    data-text="Контакты"
                >Контакты</NavLink>
            </div>
            <div className={menuStyles.navButton}>
                <NavLink
                    to={TO_PARTNERS}
                    activeClassName={menuStyles.active}
                    data-text="Партнеры"
                >Партнеры</NavLink>
            </div>
        </nav>
    )
}

export default Menu
