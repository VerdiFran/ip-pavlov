import React from 'react'
import styles from './CatalogSubmenu.module.scss'
import {NavLink} from 'react-router-dom'

/**
 * Submenu of catalog
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogSubmenu = ({submenuItems}) => {
    return (
        <div className={styles.submenuContainer}>
            <ul className={styles.submenuItems}>
                {
                    submenuItems.map(item => {
                        const classes = [styles.submenuItem]

                        if (item?.special) {
                            classes.push(styles.special)
                        }

                        return <li className={classes.join(' ')}>
                            {
                                item.path
                                    ? <NavLink to={item.path}>{item.title}</NavLink>
                                    : item.action && <button onClick={item.action}>{item.title}</button>
                            }
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default CatalogSubmenu
