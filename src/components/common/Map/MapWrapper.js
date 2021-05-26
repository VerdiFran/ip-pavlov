import React from 'react'
import styles from './Map.module.scss'

/**
 * Map wrapper for passing map id to container.
 * @param mapContainerId Id of map container.
 */
const MapWrapper = ({mapContainerId}) => {
    return <div id={mapContainerId} className={styles.map}/>;
}

export default MapWrapper