import React from 'react'
import styles from './CatalogSubmenu.module.scss'

/**
 * Submenu of catalog
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogSubmenu = () => {
    const submenuItems = [
        {
            title: 'скачать прайс-лист',
            special: true
        },
        {
            title: 'консервы'
        },
    ]

    return (
        <div className={styles.submenuContainer}>
            <ul className={styles.submenuItems}>
                {
                    submenuItems.map(item => {
                        const classes = [styles.submenuItem]

                        if (item.special) {
                            classes.push(styles.special)
                        }

                        return <li className={classes.join(' ')}>
                            <a href={'/'}>{item.title}</a>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default CatalogSubmenu
