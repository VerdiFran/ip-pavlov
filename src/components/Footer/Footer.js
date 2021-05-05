import styles from './Footer.module.scss'

/**
 * Footer component.
 * @param props Component properties.
 */
const Footer = (props) => {

    const footerInfoText = 'ИП Павлов работает с хххх года, занимается поставкой продукции от различных производителей'
    const ipPavlovText = `ИП Павлов, ${new Date().getFullYear()} г.`

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerText}>{footerInfoText}</div>
            <div className={styles.footerText}>{ipPavlovText}</div>
        </div>
    )
}

export default Footer