import styles from './Partner.module.scss'

const Partner = ({partnerInfo}) => {
    return (
        <div key={partnerInfo.id} className={styles.partnerContainer}>
            <div className={styles.partnerImageContainer}>
                <img src={partnerInfo.image.url} alt="" className={styles.partnerImage}/>
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