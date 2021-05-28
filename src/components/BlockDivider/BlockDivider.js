import React, {useRef, useState} from 'react'
import styles from './BlockDivider.module.scss'
import useDebounce from '../../hooks/useDebounce'

/**
 * Styled divider for dividing content blocks
 * @returns {JSX.Element}
 * @constructor
 */
const BlockDivider = ({type}) => {
    const startRef = useRef()
    const endRef = useRef()

    const [shortEndWidth, setShortEndWidth] = useState(10)
    const [longEndWidth, setLongEndWidth] = useState(55)

    const debouncedShortEndWidth = useDebounce(shortEndWidth, 10)
    const debouncedLongEndWidth = useDebounce(longEndWidth, 10)

    const handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 50
        setShortEndWidth(scrolled + 20)
        setLongEndWidth(100 - scrolled - 20)
    }

    window.addEventListener('scroll', handleScroll)

    const dividerStyles = {
        short: {
            start: {
                width: `${100 - debouncedShortEndWidth}%`,
                transitionDuration: '0.9s'
            },
            end: {
                width: `${debouncedShortEndWidth}%`,
                backgroundColor: '#3268A6',
                transitionDuration: '0.9s'
            }
        },
        long: {
            start: {
                width: `${100 - debouncedLongEndWidth}%`,
                transitionDuration: '0.9s'
            },
            end: {
                width: `${debouncedLongEndWidth}%`,
                backgroundColor: '#002A5A',
                transitionDuration: '0.9s'
            }
        }
    }

    const options = dividerStyles[type] || dividerStyles.short

    return (
        <div className={styles.blockDivider}>
            <div className={styles.line} style={options.start} ref={startRef}/>
            <div className={styles.lineEnd} style={options.end} ref={endRef}/>
        </div>
    )
}

export default BlockDivider
