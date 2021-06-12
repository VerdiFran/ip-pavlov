import styles from './CatalogPreloader.module.scss'
import React from 'react'

/**
 * Preloader for catalog.
 */
const CatalogPreloader = () => {
    return <div className={styles.header}>
        <div className={styles.title}>загрузка</div>
        <div className={styles.line}/>
    </div>
}

export default CatalogPreloader