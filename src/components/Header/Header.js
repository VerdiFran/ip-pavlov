import React from 'react'
import Menu from './Menu/Menu'
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
            <Menu/>
        </div>
    )
}

export default Header
