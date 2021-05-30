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
            <div
                onClick={() => window.open(partnerInfo.link)}
                className={styles.partnerLinkButton}
            >
                <span data-text="перейти на сайт">перейти на сайт</span>
            </div>
        </div>
    )
}

export default Partner