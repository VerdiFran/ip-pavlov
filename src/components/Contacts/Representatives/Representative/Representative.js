import styles from './Representative.module.scss'
import useWindowDimensions from '../../../../hooks/useWindowDimensions'
import {useEffect, useState} from 'react'

/**
 * Component that contains information about sales representative.
 * @param agents Agents that works in that point.
 * @param side Is there a description to the left or right of the map?
 * @param color Polygon color.
 * @param opacity Opacity of representative info.
 */
const Representative = ({agents, side, color, opacity}) => {
    const {width} = useWindowDimensions()

    const [polygonSide, setPolygonSide] = useState(side)
    
    useEffect(() => {
        setPolygonSide(() => width <= 1000 ? 'left' : side)
    }, [polygonSide, side, width])

    const polygonStyle = {
        backgroundColor: color,
        opacity,
        justifySelf: polygonSide === 'left' ? 'end' : 'start',
        clipPath: polygonSide === 'left'
            ? 'polygon(0 0, 100% 0, 100% 60px, 23% 60px)'
            : 'polygon(0 0, 100% 0, 77% 60px, 0 60px)'
    }

    const infoStyle = {
        opacity
    }

    const toShortTime = (time) => time.slice(0, 5)

    const toButtyPhoneNumber = (number) => {
        const template = '+x (xxx) xxx-xx-xx'
        let numberIndex = 0

        return template.split('').map(temp => temp === 'x' ? number[numberIndex++] : temp)
    }

    const agent = agents[0]

    return (
        <>
            <div style={polygonStyle} className={styles.regionPolygon}>
                {agents[0].region}
            </div>
            <div style={infoStyle} className={styles.regionDescription}>
                <div className={styles.aboutName}>
                    {agent.lastName} {agent.firstName}&nbsp;{agent.middleName}
                </div>
                <div className={styles.aboutPhone}>
                    {
                        agents.map(agent => (
                            <div>
                                {toButtyPhoneNumber(agent.phone)}
                            </div>
                        ))
                    }
                </div>
                <div className={styles.aboutSchedule}>
                    <div>ПН-ПТ: {toShortTime(agents[0].startOfWork)}-{toShortTime(agents[0].endOfWork)}</div>
                    <span>СБ, ВС: выходной</span>
                </div>
            </div>
        </>
    )
}

export default Representative