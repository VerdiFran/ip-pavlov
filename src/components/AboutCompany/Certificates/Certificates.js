import CertificateContainer from './Certificate/CertificateContainer'
import styles from './Certificates.module.scss'

/**
 * List of certificates
 * @param certificates Array of certificates
 * @returns {JSX.Element}
 * @constructor
 */
const Certificates = ({certificates}) => {
    return (
        <div>
            <h1 className="heading">
                Сертификаты
            </h1>
            <div className={styles.certificatesContainer}>
                {
                    certificates?.length > 0 && certificates.map(certificate =>
                        <CertificateContainer certificate={certificate}/>
                    )
                }
            </div>
        </div>
    )
}

export default Certificates
