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
                        Адрес: <span className={styles.street}>ул. Калинина, д. 169, ст. 4</span>.
                    </p>
                    <p>
                        Заезд во вторые ворота базы, до конца через железнодорожные пути и налево. Склад будет посередине
                    </p>
                </div>
                <div className={styles.box}>
                    <div className={styles.map}>
                        <Map mapContainerId={'how-to-find-map'} 
                            marker={[56.052979, 92.743777]}
                            center={[56.052979, 92.743777]}
                            zoom={16}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToFindUs