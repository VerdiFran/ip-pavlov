import styles from './Partners.module.scss'
import Partner from './Partner/Partner'
import {NavLink} from 'react-router-dom'
import React, {useState} from 'react'

/**
 * Initial style of partners details button.
 */
const initialButtonStyle = {
    width: "200px"
}

/**
 * Component for display list of card with partners names.
 * @param partners List of partners.
 */
const Partners = ({partners}) => {
    const [buttonStyle, setButtonStyle] = useState(initialButtonStyle)

    const handleResize = (width) => setButtonStyle({
        width: width
    })

    return (
        <div className={styles.partnersBlock}>
            <h1 className="heading">наши партнеры</h1>
            <div className={styles.partnersContainer}>
                {
                    partners.map((partner, idx) =>
                        <Partner handleResize={idx === 0 && handleResize} name={partner.name}/>
                    )
                }
            </div>
            <NavLink style={buttonStyle} className={styles.partnersDetailsButton} to="/partners">подробнее о партнерах</NavLink>
        </div>
    )
}

export default Partners