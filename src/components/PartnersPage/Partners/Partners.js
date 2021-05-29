import PartnerContainer from './Partner/PartnerContainer'
import styles from './Partners.module.scss'

const Partners = ({partners}) => {
    return (
        <div>
            <h1 className="heading">
                Наши партнеры
            </h1>
            <div className={styles.partnersContainer}>
                {
                    partners?.length > 0 && partners.map(partner =>
                        <PartnerContainer partner={partner}/>
                    )
                }
            </div>
        </div>
    )
}

export default Partners