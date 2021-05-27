import Map from '../../common/Map/Map'
import * as coords from './coords'
import {useState} from 'react'

const Representatives = ({representatives}) => {
    const [currentDistrict, setCurrentDistrict] = useState(null)

    const colors = ['#103C6C', '#6498D3', '#26A08F', '#6c0b06', '#A58514', '#0F7E23', '#A55014']
    const districtsNames = [...new Set(representatives.map(representative => representative.region))]

    const polygons = districtsNames.map((name, idx) => {
        const districtRepresentatives = representatives.filter(representative => representative.region === name)
        const coordinates = coords.districtsCoordinates.get(name) ?? null
        const polygon = {
            description: {
                id: idx,
                representatives: districtRepresentatives,
                style: {color: colors[idx % colors.length]}
            },
            coordinates: coordinates?.split(' ')?.map(pair => {
                const [lng, lat] = pair.split(',')
                return [+lat, +lng] ?? []
            })
        }

        polygon.onMouseOver = (poly) => {
            if (poly.description.id !== currentDistrict?.id) {
                setCurrentDistrict(poly)
            }
        }

        return polygon
    })

    return polygons?.length && <div style={{width: '1000px', height: '1000px'}}>
        <Map polygons={polygons} mapContainerId={'representatives-map'}/>
    </div>
}

export default Representatives