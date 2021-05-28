import styles from './OurContacts.module.scss'
import call from '../../../assets/images/contacts/call.svg'
import email from '../../../assets/images/contacts/open-email.svg'
import address from '../../../assets/images/contacts/address.svg'
import {useState} from 'react'

const OurContacts = () => {
    const defaultCopyButtonStyle = {
        border: '2px solid #3268A6'
    }

    const activeCopyButtonStyle = {
        border: '2px solid #4BB543'
    }

    const [copyButtonStyle, setCopyButtonStyle] = useState(defaultCopyButtonStyle)
    const [tip, setTip] = useState('Скопировать')

    const emailContact = 'ip.pavlov@example.com'
    const handleCopy = () => {
        setCopyButtonStyle(activeCopyButtonStyle)
        navigator.clipboard.writeText(emailContact)
            .then(() => {
                setTip('Скопировано!')
                setTimeout(() => {
                    setCopyButtonStyle(defaultCopyButtonStyle)
                    setTip('Скопировать')
                }, 3000)
            })
    }

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
                        <img src={email} alt="email" className={styles.contactImage}/>
                        <span>email</span>
                    </div>
                    <div className={styles.contactWithCopy}>
                        <span className={styles.contact}>{emailContact}</span>
                        <div onClick={handleCopy} className={styles.copy}>
                            <div className={styles.copyButton}>
                                <div style={copyButtonStyle} className={styles.backCopy}/>
                                <div style={copyButtonStyle} className={styles.frontCopy}/>
                            </div>
                            <div className={styles.tip}>{tip}</div>
                        </div>
                    </div>
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