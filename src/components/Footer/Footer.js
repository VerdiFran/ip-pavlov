import styles from './Footer.module.scss'

/**
 * Footer component.
 */
const Footer = () => {

    const footerInfoText = 'ИП Павлов работает с хххх года, занимается поставкой продукции от различных производителей'

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerText}>{footerInfoText}</div>
            <div className={styles.footerText}>
                ИП Павлов, {new Date().getFullYear()}&nbsp;г.
            </div>
        </div>
    )
}

export default Footer