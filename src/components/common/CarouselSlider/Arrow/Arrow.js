import styles from './Arrow.module.scss'

/**
 * Arrow for carousel slider.
 * @param type left or right.
 */
const Arrow = ({type}) => {
    return type === 'right' ? (
        <div className={styles.arrow}>
            <div className={styles.arrowRightTop}/>
            <div className={styles.arrowRightBottom}/>
        </div>
    ) : (
        <div className={styles.arrow}>
            <div className={styles.arrowLeftTop}/>
            <div className={styles.arrowLeftBottom}/>
        </div>
    )
}

export default Arrow