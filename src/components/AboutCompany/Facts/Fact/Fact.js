import styles from './Fact.module.scss'

/**
 * Component with fact description.
 * @param description Fact description.
 * @param image Additional image.
 */
const Fact = ({description, image}) => {
    return (
        <div className={styles.factContainer}>
            <p className={styles.factDescription}>{description}</p>
            <img className={styles.factImage} src={image} alt="fact-image"/>
        </div>
    )
}

export default Fact