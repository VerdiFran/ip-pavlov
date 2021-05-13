import React from 'react'
import styles from './CatalogSubmenu.module.scss'
import {NavLink} from 'react-router-dom'

/**
 * Submenu of catalog
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogSubmenu = ({categories}) => {
    const items = [
        {
            title: 'скачать прайс-лист',
            special: true,
            path: '/'
        }
    ].concat(categories || [])

    return (
        <div className={styles.submenuContainer}>
            <ul className={styles.submenuItems}>
                {
                    items.map(item => {
                        const classes = [styles.submenuItem]

                        if (item?.special) {
                            classes.push(styles.special)
                        }

                        return <li className={classes.join(' ')}>
                            <NavLink to={item.path}>{item.title}</NavLink>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default CatalogSubmenu
