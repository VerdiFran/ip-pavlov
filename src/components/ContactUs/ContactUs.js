import React, {useEffect} from 'react'
import styles from './ContactUs.module.scss'
import useVisible from '../../hooks/useVisible'
import ContactUsFormContainer from './ContactUsForm/ContactUsFormContainer'

/**
 * Component with button and opening question from.
 */
const ContactUs = () => {
    const {ref, isVisible, setIsVisible} = useVisible(false, 'click')

    const close = () => setIsVisible(false)

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, 1000)
    }, [])

    return (
        <div ref={ref} className={styles.contactUsWrapper}>
            {
                !isVisible && <button
                    className={styles.contactUsButton}
                    onClick={() => setIsVisible(!isVisible)}
                >?</button>
            }
            {
                isVisible && <div>
                    <ContactUsFormContainer close={close}/>
                </div>
            }
        </div>
    )
}

export default ContactUs
