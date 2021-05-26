import styles from './Partner.module.scss'
import {useResizeDetector} from 'react-resize-detector'

/**
 * Component for display concrete partner.
 * @param handleResize Invokes when partner card resizing.
 * @param name Partner name.
 */
const Partner = ({handleResize, name}) => {
    const padding = 6
    const partnerCardPadding = {
        padding: padding + 'px'
    }

    const {ref} = useResizeDetector({
        onResize: (width) => {
            handleResize && handleResize(width + padding * 2)
        }
    })

    return (
        <div ref={ref} style={partnerCardPadding} className={styles.partnerCard}>
            <span className={styles.partnerName}>{name}</span>
        </div>
    )
}

export default Partner