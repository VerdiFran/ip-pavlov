import styles from './Partners.module.scss'
import Partner from './Partner/Partner'

/**
 * Component for display list of card with partners names.
 * @param partners List of partners.
 */
const Partners = ({partners}) => {
    return (
        <>
            <h1 className="heading">наши партнеры</h1>
            <div className={styles.partnersContainer}>
                {
                    partners.map(partner =>
                        <Partner name={partner.name}/>
                    )
                }
            </div>
        </>
    )
}

export default Partners