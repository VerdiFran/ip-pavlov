import styles from './Arrow.module.scss'

/**
 * Arrow for carousel slider.
 * @param type left or right.
 * @param onClick On click action.
 * @param height Height of arrow.
 * @param width Width of arrow.
 */
const Arrow = ({type, onClick, height, width}) => {

    const arrowStyle = {
        height: height ?? '100%',
        width: width ?? '100%'
    }

    return (
        <div style={arrowStyle}>
            {type === 'right' ? (
                <div onClick={onClick} className={styles.arrow}>
                    <div className={styles.arrowRightTop}/>
                    <div className={styles.arrowRightBottom}/>
                </div>
            ) : (
                <div onClick={onClick} className={styles.arrow}>
                    <div className={styles.arrowLeftTop}/>
                    <div className={styles.arrowLeftBottom}/>
                </div>
            )}
        </div>
    )
}

export default Arrow