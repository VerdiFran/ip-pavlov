import React from 'react'
import styles from './PageWrapper.module.scss'

/**
 * Component that add left and right borders to page. Wrapper for content of page
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const PageWrapper = (props) => {
    return (
        <div>
            <div className={styles.pageWrapper}>
                <div className={styles.border}/>
                <div className={styles.border}/>
            </div>
            <div className={styles.contentWrapper}>
                {props.children}
            </div>
        </div>
    )
}

export default PageWrapper
