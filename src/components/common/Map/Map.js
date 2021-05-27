import {useEffect} from 'react'
import MapWrapper from './MapWrapper'
import DG from '2gis-maps'

/**
 * Component with map.
 */
const Map = ({center, zoom, polygons ,mapContainerId}) => {

    useEffect(() => {
        const map = DG.map(mapContainerId, {
            'center': center ?? [56.010052, 92.852600],
            'zoom': zoom ?? 11
        })

        if (polygons) {
            DG.then(() => {
                polygons.forEach(poly => {
                    if (!poly.coordinates) {
                        return
                    }

                    const polygon = DG.polygon(poly.coordinates, poly?.description?.style ?? {}).addTo(map)

                    polygon.on('mouseover', () => {
                        poly?.onMouseOver && poly.onMouseOver(poly)
                    })

                    polygon.on('mouseout', () => {
                        poly?.onMouseOut && poly.onMouseOut(poly)
                    })
                })
            })
        }
    }, [])

    return <MapWrapper mapContainerId={mapContainerId}/>
}

export default Map