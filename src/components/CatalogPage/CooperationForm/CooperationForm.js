import {Formik, ErrorMessage, Field, Form, getIn} from 'formik'
import * as yup from 'yup'
import formStyles from '../../ContactUs/ContactUsForm/ContactUsForm.module.scss'
import styles from './CooperationForm.module.scss'
import closeImage from '../../../assets/images/close-button.svg'

const CooperationForm = ({objRef, handleSubmit, close}) => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const cooperationSchema = yup.object().shape({
        companyName: yup.string()
            .required('Это поле обязательно для заполнения.')
            .max(70, ''),
        name: yup.string()
            .required('Это поле обязательно для заполнения.')
            .max(70, ''),
        phoneNumber: yup.string()
            .required('Это поле обязательно для заполнения.')
            .matches(phoneRegExp, 'Phone number is not valid'),
        email: yup.string()
            .required('Это поле обязательно для заполнения.')
            .email('Некорректный эл. адрес.')
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
        <div className={styles.formBackground}>
            <Formik
                initialValues={{
                    companyName: '',
                    name: '',
                    phoneNumber: '',
                    email: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={cooperationSchema}
            >
                {({errors, validateForm}) => (
                    <Form className={[formStyles.formContainer, styles.form].join(' ')} ref={objRef}>
                        <button
                            className={styles.closeButton}
                            onClick={close}
                        ><img src={closeImage} alt="close"/></button>
                        <h1 className={[styles.title, 'heading'].join(' ')}>
                            Заполните форму, чтобы начать сотрудничество
                        </h1>
                        <p className={styles.text}>
                            Пришлите нам свои данные, и мы вышлем прайс-лист
                        </p>
                        <div className={formStyles.fieldContainer}>
                            <label htmlFor="companyName">Название компании</label>
                            <Field
                                name="companyName"
                                type="companyName"
                                id="companyName"
                                style={getStyles(errors, 'companyName')}
                            />
                            <div className="errorMessage">
                                <ErrorMessage name="companyName"/>
                            </div>
                        </div>
                        <div className={formStyles.fieldContainer}>
                            <label htmlFor="name">Имя</label>
                            <Field
                                name="name"
                                id="name"
                                style={getStyles(errors, 'name')}
                            />
                            <div className="errorMessage">
                                <ErrorMessage name="name"/>
                            </div>
                        </div>
                        <div className={formStyles.fieldContainer}>
                            <label htmlFor="phoneNumber">Номер телефона</label>
                            <Field
                                name="phoneNumber"
                                type="phoneNumber"
                                id="phoneNumber"
                                style={getStyles(errors, 'phoneNumber')}
                            />
                            <div className="errorMessage">
                                <ErrorMessage name="phoneNumber"/>
                            </div>
                        </div>
                        <div className={formStyles.fieldContainer}>
                            <label htmlFor="email">E-mail</label>
                            <Field
                                name="email"
                                type="email"
                                id="email"
                                style={getStyles(errors, 'email')}
                            />
                            <div className="errorMessage">
                                <ErrorMessage name="email"/>
                            </div>
                            <div>
                                Нажимая на кнопку, вы даете согласие на обработку своих персональных данных
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={formStyles.button}
                            onClick={() => {
                                validateForm().then()
                            }}
                        >Отправить
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CooperationForm
