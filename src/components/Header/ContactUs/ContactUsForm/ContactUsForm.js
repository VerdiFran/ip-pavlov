import React from 'react'
import * as yup from 'yup'
import {Form, Formik, Field, ErrorMessage, getIn} from 'formik'
import styles from './ContactUsForm.module.scss'

/**
 * Contact form.
 */
const ContactUsForm = ({handleSubmit}) => {
    const contactUsSchema = yup.object().shape({
        name: yup.string().required('Это поле обзательно для заполнения.'),
        email: yup.string().required('Это поле обзательно для заполнения.').email('Некорректный email.'),
        message: yup.string().required('Это поле обзательно для заполнения.'),
    })

    const getStyles = (errors, fieldName) => {
        if (getIn(errors, fieldName)) {
            return {
                outline: '1px solid #cb0000',
                transitionDuration: '0.5s'
            }
        }
    }

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
                validationSchema={contactUsSchema}
            >
                {({errors, validateForm}) => (
                    <Form>
                        <div className={styles.fieldContainer}>
                            <label htmlFor="name">Ваше имя</label>
                            <Field
                                name="name"
                                id="name"
                                style={getStyles(errors, 'name')}
                            />
                            <div className={styles.errorMessage}>
                                <ErrorMessage name="name"/>
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <label htmlFor="email">Ваш E-mail</label>
                            <Field
                                name="email"
                                type="email"
                                id="email"
                                style={getStyles(errors, 'email')}
                            />
                            <div className={styles.errorMessage}>
                                <ErrorMessage name="email"/>
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <label htmlFor="message">Ваш вопрос</label>
                            <Field
                                as="textarea"
                                name="message"
                                id="message"
                                className={styles.questionField}
                                style={getStyles(errors, 'message')}
                            />
                            <div className={styles.errorMessage}>
                                <ErrorMessage name="message"/>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={styles.button}
                            onClick={() => {
                                validateForm().then()
                            }}
                        >Отправить</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ContactUsForm
