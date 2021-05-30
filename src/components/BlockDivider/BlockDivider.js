import React, {useRef, useState} from 'react'
import styles from './BlockDivider.module.scss'

/**
 * Styled divider for dividing content blocks.
 */
const BlockDivider = ({type}) => {
    const startRef = useRef()
    const endRef = useRef()

    const [shortEndWidth, setShortEndWidth] = useState(10)
    const [longEndWidth, setLongEndWidth] = useState(55)
    const [inAnimation, setInAnimation] = useState(false)

    const handleScroll = () => {
        if (!inAnimation) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = (winScroll / height) * 50

            setShortEndWidth(scrolled + 20)
            setLongEndWidth(100 - scrolled - 20)
            setInAnimation(true)

            setTimeout(() => setInAnimation(false), 1800)
        }
    }

    window.addEventListener('scroll', handleScroll)

    const dividerStyles = {
        short: {
            start: {
                width: `${100 - shortEndWidth}%`,
                transitionDuration: '0.9s'
            },
            end: {
                width: `${shortEndWidth}%`,
                backgroundColor: '#3268A6',
                transitionDuration: '0.9s'
            }
        },
        long: {
            start: {
                width: `${100 - longEndWidth}%`,
                transitionDuration: '0.9s'
            },
            end: {
                width: `${longEndWidth}%`,
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
