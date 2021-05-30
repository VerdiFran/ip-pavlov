import ContactUsForm from './ContactUsForm'
import emailApi from '../../../../api/emailApi'
import {connect} from 'react-redux'
import {messageStatuses, showMessage} from '../../../../redux/reducers/appReducer'

/**
 * Container component for contact form
 * @returns {JSX.Element}
 * @constructor
 */
const ContactUsFormContainer = ({close, showMessage}) => {
    const handleSubmit = async (values) => {
        try {
            const response = await emailApi.sendQuestion(values)
            if (response.status === 200) {
                close()
                showMessage(messageStatuses.success, 'Ваш вопрос успешно отправлен!')
            }
        } catch (e) {
            showMessage(messageStatuses.error, 'Что-то пошло не так, попробуйте позже.')
        }
    }

    return <ContactUsForm handleSubmit={handleSubmit}/>
}

export default connect(null, {showMessage})(ContactUsFormContainer)