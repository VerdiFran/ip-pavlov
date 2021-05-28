import React from 'react'
import styles from './BlockWrapper.module.scss'
import BlockDivider from './../BlockDivider/BlockDivider'

/**
 * Wrapper component for content block
 * @param wrapperType
 * @param dividerType
 * @param hasDivider
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const BlockWrapper = ({wrapperType, dividerType, style, children}) => {
    const wrapperStyles = {
        light: {
            style: {
                backgroundColor: '#ffffff'
            },
            hasDivider: true
        },
        dark: {
            style: {
                backgroundColor: '#99b4d3'
            },
            hasDivider: true
        },
        grey: {
            style: {
                backgroundColor: '#ececec'
            },
            hasDivider: false
        }
    }

    const options = wrapperStyles[wrapperType] || wrapperStyles.light
    const hasBlockDivider = options.hasDivider && !!dividerType

    return (
        <div className={styles.blockWrapper} style={{...options.style, ...style}}>
            {
                hasBlockDivider && <BlockDivider type={dividerType}/>
            }
            <div className={styles.contentBlock}>{children}</div>
        </div>
    )
}

export default BlockWrapper
