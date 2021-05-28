import styles from './Representative.module.scss'

/**
 * Component that contains information about sales representative.
 * @param agents Agents that works in that point.
 * @param side Is there a description to the left or right of the map?
 * @param color Polygon color.
 */
const Representative = ({agents, side, color}) => {
    const polygonStyle = {
        backgroundColor: color,
        padding: side === 'left' ? '0 0 0 20px' : '0 20px 0 0',
        justifySelf: side === 'left' ? 'end' : 'start',
        clipPath: side === 'left' ? 'polygon(0 0, 350px 0, 350px 60px, 100px 60px)'
            : 'polygon(0 0, 350px 0, 250px 60px, 0 60px)'
    }

    const toShortTime = (time) => time.slice(0, 5)

    const toButtyPhoneNumber = (number) => {
        const template = '+x (xxx) xxx-xx-xx'
        let numberIndex = 0

        return template.split('').map(temp => temp === 'x' ? number[numberIndex++] : temp)
    }

    const agent = agents[0]

    return (
        <div>
            <div style={polygonStyle} className={styles.regionPolygon}>
                {agents[0].region}
            </div>
            <div className={styles.regionDescription}>
                <div className={styles.aboutName}>
                    {agent.lastName} {agent.firstName} {agent.middleName}
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
        </div>
    )
}

export default Representative