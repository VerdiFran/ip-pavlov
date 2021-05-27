import {useEffect} from 'react'
import MapWrapper from './MapWrapper'
import DG from '2gis-maps'

/**
 * Component with map.
 */
const Map = ({polygons ,mapContainerId}) => {
    useEffect(() => {
        const map = DG.map(mapContainerId, {
            'center': [56.0905, 92.999355],
            'zoom': 11
        })

        if (polygons) {
            DG.then(() => {
                polygons.forEach(poly => {
                    const polygon = DG.polygon(poly.coordinates, poly.description.style).addTo(map)
                    const polygonBounds = polygon.getBounds()

                    polygon.on('mouseover', () => {
                        poly?.onMouseOver(poly)
                    })

                    polygon.on('mouseout', () => {
                        poly?.onMouseOut(poly)
                    })

                    map.fitBounds(polygonBounds);
                })
            })
        }
    }, [])

    return <MapWrapper mapContainerId={mapContainerId}/>
}

export default Map