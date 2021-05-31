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
            <div className={styles.pageWrapper} id="pageWrapper">
                <div className={styles.contentWrapper} id="contentWrapper">
                    <div className={styles.content} style={props.style}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageWrapper
