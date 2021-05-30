import React from 'react'
import {Form, Formik, Field} from 'formik'
import styles from './ContactUsForm.module.scss'

/**
 * Contact form
 * @returns {JSX.Element}
 * @constructor
 */
const ContactUsForm = ({handleSubmit}) => {
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
                onSubmit={(values => handleSubmit(values))}
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
                            <Field as="textarea" name="message" id="message" className={styles.questionField}/>
                        </div>
                        <button onClick={handleSubmit}>Отправить</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ContactUsForm
