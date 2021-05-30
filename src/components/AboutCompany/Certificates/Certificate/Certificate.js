import styles from './Certificate.module.scss'

/**
 * Certificate
 * @param certificate Information about certificate
 * @param image Certificate image
 * @returns {JSX.Element}
 * @constructor
 */
const Certificate = ({certificate, image}) => {
    return (
        <div key={certificate.id} className={styles.certificateContainer}>
            <img src={image ? URL.createObjectURL(image) : ''} alt="" className={styles.certificateImage}/>
            <div className={styles.certificateDescription}>
                {
                    certificate?.description
                }
            </div>
        </div>
    )
}

export default Certificate
