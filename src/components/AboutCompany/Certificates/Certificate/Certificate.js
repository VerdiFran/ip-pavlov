import styles from './Certificate.module.scss'

const Certificate = ({certificate, image}) => {
    return (
        <div key={certificate.id} className={styles.certificateContainer}>
            <img src={certificate.image.url} alt="" className={styles.certificateImage}/>
            <div className={styles.certificateDescription}>
                {
                    certificate?.description
                }
            </div>
        </div>
    )
}

export default Certificate
