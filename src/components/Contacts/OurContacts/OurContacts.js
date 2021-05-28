import styles from './OurContacts.module.scss'
import call from '../../../assets/images/contacts/call.svg'
import email from '../../../assets/images/contacts/open-email.svg'
import address from '../../../assets/images/contacts/address.svg'

const OurContacts = () => {
    return (
        <div className={styles.contactsSection}>
            <h1 className="heading">наши контакты</h1>
            <div className={styles.contactsContainer}>
                <div className={styles.contactContainer}>
                    <div className={styles.contactTitle}>
                        <img src={call} alt="call" className={styles.contactImage}/>
                        <span>номер телефона</span>
                    </div>
                    <span className={styles.contact}>+7 (904) 869-25-21</span>
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.contactTitle}>
                        <img src={email} alt={email} className={styles.contactImage}/>
                        <span>email</span>
                    </div>
                    <span className={styles.contact}>ip.pavlov@example.com</span>
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.contactTitle}>
                        <img src={address} alt="address" className={styles.contactImage}/>
                        <span>адрес</span>
                    </div>
                    <span className={styles.contact}>ул. Красноярская, д 23</span>
                </div>
            </div>
        </div>
    )
}

export default OurContacts