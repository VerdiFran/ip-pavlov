import React from 'react'
import styles from './BlockWrapper.module.scss'
import BlockDivider from './../BlockDivider/BlockDivider'

const BlockWrapper = ({children}) => {
    return (
        <div className={styles.blockWrapper}>
            <BlockDivider/>
            <div className={styles.contentBlock}>{children}</div>
        </div>
    )
}

export default BlockWrapper
