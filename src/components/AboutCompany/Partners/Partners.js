import styles from './Partners.module.scss'
import Partner from './Partner/Partner'

/**
 * Component for display list of card with partners names.
 * @param partners List of partners.
 */
const Partners = ({partners}) => {
    return (
        <div className={styles.partnersContainer}>
            {
                partners.map(partner =>
                    <Partner name={partner.name}/>
                )
            }
        </div>
    )
}

export default Partners