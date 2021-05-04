import React from 'react'
import styles from './BlockDivider.module.scss'

/**
 * Styled divider for dividing content blocks
 * @returns {JSX.Element}
 * @constructor
 */
const BlockDivider = () => {
    return (
        <div className={styles.blockDivider}>
            <div className={styles.line}/>
            <div className={styles.lineEnd}/>
        </div>
    )
}

export default BlockDivider
