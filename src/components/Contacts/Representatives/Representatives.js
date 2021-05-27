import Map from '../../common/Map/Map'
import * as coords from './coords'
import {useState} from 'react'

const Representatives = ({representatives}) => {
    const districts = [
        { id: 0, style: { color: '#103C6C' } },
        { id: 1, style: { color: '#6498D3' } },
        { id: 2, style: { color: '#26A08F' } },
        { id: 3, style: { color: '#6c0b06' } },
        { id: 4, style: { color: '#A58514' } },
        { id: 5, style: { color: '#0F7E23' } },
        { id: 6, style: { color: '#A55014' } }
    ]

    const [currentDistrict, setCurrentDistrict] = useState(null)

    const getPolygon = (str, description) =>
    {
        return {
            description,
            onMouseOver: (polygon) => {
                if (polygon.description.id !== currentDistrict?.id) {
                    const newCurrent = districts.find(district => district.id === polygon.description.id)
                    setCurrentDistrict(newCurrent)
                }
            },
            onMouseOut: () => {
            },
            coordinates: str.split(' ').map(pair => {
                const [lng, lat] = pair.split(',')
                return [+lat, +lng]
            })
        }
    }

    const polygons = [
        getPolygon(coords.sovetskyDistrict, districts[0]),
        getPolygon(coords.sverdlovskyDistrict, districts[1]),
        getPolygon(coords.oktyabrskyDistrict, districts[2]),
        getPolygon(coords.centralnyDistrict, districts[3]),
        getPolygon(coords.zheleznodorozhnyDistrict, districts[4]),
        getPolygon(coords.kirovskyDistrict, districts[5]),
        getPolygon(coords.leninskyDistrict, districts[6])
    ]

    return <div style={{width: '1000px', height: '1000px'}}>
        <Map polygons={polygons} mapContainerId={'representatives-map'}/>
    </div>
}

export default Representatives