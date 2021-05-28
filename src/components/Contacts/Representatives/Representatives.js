import Map from '../../common/Map/Map'
import * as coords from './coords'
import {useState} from 'react'
import styles from './Representatives.module.scss'
import Representative from './Representative/Representative'

/**
 * Component that contains information about sales representatives and their location on map.
 * @param representatives List of sales representatives.
 */
const Representatives = ({representatives}) => {
    const [currentDistrict, setCurrentDistrict] = useState(null)

    const colors = ['#103C6C', '#6498D3', '#26A08F', '#6c0b06', '#A58514', '#0F7E23', '#A55014']
    const districtsNames = [...new Set(representatives.map(representative => representative.region))]

    const polygons = districtsNames.map((name, idx) => {
        const agents = representatives.filter(representative => representative.region === name)
        const coordinates = coords.districtsCoordinates.get(name) ?? null
        const polygon = {
            description: {
                id: idx,
                agents,
                style: {color: colors[idx % colors.length]}
            },
            coordinates: coordinates?.split(' ')?.map(pair => {
                const [lng, lat] = pair.split(',')
                return [+lat, +lng] ?? []
            })
        }

        polygon.onMouseOver = (poly) => {
            setCurrentDistrict(poly)
        }

        polygon.onMouseOut = () => {
            setCurrentDistrict(null)
        }

        return polygon
    })

    const getOpacity = (polygon) => {
        if (currentDistrict === null) {
            return 1
        }

        return polygon.description.id === currentDistrict.description.id ? 1 : 0.4
    }

    return polygons?.length &&
        (
            <div className={styles.representativesContainer}>
                <div className={styles.map}>
                    <Map zoom={10} polygons={polygons} mapContainerId={'representatives-map'}/>
                </div>
                {polygons.map((polygon, idx) => {
                    const style = {
                        justifySelf: idx % 2 === 0 ? 'end' : 'start'
                    }
                    return (
                        <div style={style} className={`rep${idx + 1}`}>
                            <Representative
                                side={idx % 2 === 0 ? 'left' : 'right'}
                                color={polygon.description.style.color}
                                agents={polygon.description.agents}
                                opacity={getOpacity(polygon)}
                            />
                        </div>
                    )
                })}
            </div>
        )
}

export default Representatives