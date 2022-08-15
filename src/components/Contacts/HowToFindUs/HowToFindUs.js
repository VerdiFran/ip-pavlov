import Map from '../../common/Map/Map'
import styles from './HowToFindUs.module.scss'

/**
 * Component with description of how to find company.
 */
const HowToFindUs = () => {
    return (
        <div>
            <h1 className="heading">Как нас найти</h1>
            <div className={styles.locationContainer}>
                <div className={styles.locationInfo}>
                    <p>
                        Адрес: <span className={styles.street}>ул. Красноярская, д 23</span>.
                    </p>
                </div>
                <div className={styles.box}>
                    <div className={styles.map}>
                        <Map mapContainerId={'how-to-find-map'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToFindUs