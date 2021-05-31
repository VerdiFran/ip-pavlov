import React from 'react'
import styles from './ListWrapper.module.scss'

/**
 * Wrapper for list of categories or products
 */
const ListWrapper = ({title, loading, children}) => {
    if (loading) {
        return <div>loading...</div>
    }

    return (
        <div className={styles.listWrapper}>
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                <div className={styles.line}/>
            </div>
            <div className={styles.childrenContainer}>
                {children}
            </div>
        </div>
    )
}

export default ListWrapper
