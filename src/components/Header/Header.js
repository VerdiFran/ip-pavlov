import React from 'react'
import styles from './Header.module.scss'

/**
 * Header component with logo and navigation panel
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <div className={styles.headerPolygon}><span>ИП Павлов</span></div>
            </div>
            <nav className={styles.navPanelContainer}>
                <div className={styles.navButton}>Главная</div>
                <div className={styles.navButton}>О компании</div>
                <div className={styles.navButton}>Каталог</div>
                <div className={styles.navButton}>Контакты</div>
                <div className={styles.navButton}>Партнеры</div>
            </nav>
        </div>
    )
}

export default Header
