import {useEffect} from 'react'
import MapWrapper from './MapWrapper'
import DG from '2gis-maps'

/**
 * Component with map.
 */
const Map = () => {
    const mapContainerId = 'map-container'

    useEffect(() => {
        const map = DG.map(mapContainerId, {
            'center': [54.98, 82.89],
            'zoom': 13
        })
    }, [])

    return <MapWrapper mapContainerId={mapContainerId}/>
}

export default Map