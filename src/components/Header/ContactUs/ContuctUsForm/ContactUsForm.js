import React from 'react'
import {Form, Formik, Field} from 'formik'
import styles from './ContactUsForm.module.scss'

/**
 * Contact form
 * @returns {JSX.Element}
 * @constructor
 */
const ContactUsForm = () => {
    return (
        <div className={styles.formContainer}>
            <div className={styles.extraMessage}>
                Оставьте свои контакты и вопрос, и мы свяжемся с Вами в ближайшее время!
            </div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: ''
                }}
                onSubmit={(values => alert(JSON.stringify(values, null, 2)))}
            >
                {({handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <div className={styles.fieldContainer}>
                            <label htmlFor="name">Ваше имя</label>
                            <Field name="name" id="name"/>
                        </div>
                        <div className={styles.fieldContainer}>
                            <label htmlFor="email">Ваш E-mail</label>
                            <Field name="email" type="email" id="email"/>
                        </div>
                        <div className={styles.fieldContainer}>
                            <label htmlFor="message">Ваш вопрос</label>
                            <textarea name="message" id="message" className={styles.questionField}/>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ContactUsForm
