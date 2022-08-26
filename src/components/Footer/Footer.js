import styles from './Footer.module.scss'

/**
 * Footer component.
 */
const Footer = () => {

    const footerInfoText = 'ИП Павлов работает с 1996 года, занимается поставкой продукции от различных производителей'

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