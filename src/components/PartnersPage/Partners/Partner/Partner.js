import styles from './Partner.module.scss'

/**
 * Partner's card
 * @param partnerInfo Information about partner
 * @param image Partner's logo
 * @returns {JSX.Element}
 * @constructor
 */
const Partner = ({partnerInfo, image}) => {
    return (
        <div key={partnerInfo.id} className={styles.partnerContainer}>
            <div className={styles.partnerImageContainer}>
                <img src={image ? URL.createObjectURL(image) : ''} alt="" className={styles.partnerImage}/>
            </div>
            <div className={styles.partnerName}>
                {partnerInfo.name}
            </div>
            <div className={styles.partnerDescription}>
                {partnerInfo.description}
            </div>
        </div>
    )
}

export default Partner