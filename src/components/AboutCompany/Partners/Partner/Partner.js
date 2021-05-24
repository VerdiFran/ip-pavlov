import styles from './Partner.module.scss'

/**
 * Component for display concrete partner.
 * @param name Partner name.
 */
const Partner = ({name}) => {
    return (
        <div className={styles.partnerCard}>
            <span className={styles.partnerName}>{name}</span>
        </div>
    )
}

export default Partner