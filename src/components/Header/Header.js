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
            <div className={styles.logoContainer}>ИП Павлов</div>
            <div className={styles.navPanelContainer}>
                <div className={styles.navButton}>Главная</div>
                <div className={styles.navButton}>О компании</div>
                <div className={styles.navButton}>Каталог</div>
                <div className={styles.navButton}>Контакты</div>
                <div className={styles.navButton}>Партнеры</div>
            </div>
        </div>
    )
}

export default Header
