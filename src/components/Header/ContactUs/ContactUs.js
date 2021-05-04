import React from 'react'
import styles from './ContactUs.module.scss'

/**
 * Component with button and opening question from
 * @returns {JSX.Element}
 * @constructor
 */
const ContactUs = () => {
    return (
        <div>
            <div className={styles.contactUsPolygon}>
                <span>Связаться с нами</span>
            </div>
        </div>
    )
}

export default ContactUs
