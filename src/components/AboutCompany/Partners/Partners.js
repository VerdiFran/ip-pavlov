import styles from './Partners.module.scss'
import Partner from './Partner/Partner'
import {NavLink} from 'react-router-dom'

/**
 * Component for display list of card with partners names.
 * @param partners List of partners.
 */
const Partners = ({partners}) => {

    return (
        <div className={styles.partnersBlock}>
            <h1 className="heading">наши партнеры</h1>
            <div className={styles.partnersContainer}>
                {
                    partners.map(partner =>
                        <Partner name={partner.name}/>
                    )
                }
            </div>
            <NavLink className={styles.anotherPartnersButton} to="/partners">подробнее о партнерах</NavLink>
        </div>
    )
}

export default Partners