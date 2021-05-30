import React from 'react'
import styles from './ContactUs.module.scss'
import useVisible from '../../../hooks/useVisible'
import ContactUsFormContainer from './ContactUsForm/ContactUsFormContainer'

/**
 * Component with button and opening question from
 * @returns {JSX.Element}
 * @constructor
 */
const ContactUs = () => {
    const {ref, isVisible, setIsVisible} = useVisible(false, 'click')

    return (
        <div ref={ref}>
            <div className={styles.contactUsPolygon} onClick={() => setIsVisible(!isVisible)}>
                <span>Связаться с нами</span>
            </div>
            {
                isVisible && <div>
                    <ContactUsFormContainer/>
                </div>
            }
        </div>
    )
}

export default ContactUs
