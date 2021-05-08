import React from 'react'
import styles from './ContactUs.module.scss'
import ContactUsForm from './ContuctUsForm/ContactUsForm'
import useVisible from '../../../hooks/useVisible'

/**
 * Component with button and opening question from
 * @returns {JSX.Element}
 * @constructor
 */
const ContactUs = () => {
    const {ref, isVisible, setIsVisible} = useVisible(false, 'click')

    return (
        <div>
            <div className={styles.contactUsPolygon} onClick={() => setIsVisible(!isVisible)}>
                <span>Связаться с нами</span>
            </div>
            {
                isVisible && <div ref={ref}>
                    <ContactUsForm/>
                </div>
            }
        </div>
    )
}

export default ContactUs
