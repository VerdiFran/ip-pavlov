import React from 'react'
import styles from './BlockDivider.module.scss'

/**
 * Styled divider for dividing content blocks
 * @returns {JSX.Element}
 * @constructor
 */
const BlockDivider = ({type}) => {
    const dividerStyles = {
        short: {
            start: {
                width: '30%'
            },
            end: {
                width: '70%',
                backgroundColor: '#3268A6'
            }
        },
        long: {
            start: {
                width: '45%'
            },
            end: {
                width: '55%',
                backgroundColor: '#002A5A'
            }
        }
    }

    const options = dividerStyles[type] || dividerStyles.short

    return (
        <div className={styles.blockDivider}>
            <div className={styles.line} style={options.start}/>
            <div className={styles.lineEnd} style={options.end}/>
        </div>
    )
}

export default BlockDivider
