import styles from './Arrow.module.scss'

/**
 * Arrow for carousel slider.
 * @param type left or right.
 * @param onClick On click action.
 */
const Arrow = ({type, onClick}) => {
    return type === 'right' ? (
        <div onClick={onClick} className={styles.arrow}>
            <div className={styles.arrowRightTop}/>
            <div className={styles.arrowRightBottom}/>
        </div>
    ) : (
        <div onClick={onClick} className={styles.arrow}>
            <div className={styles.arrowLeftTop}/>
            <div className={styles.arrowLeftBottom}/>
        </div>
    )
}

export default Arrow