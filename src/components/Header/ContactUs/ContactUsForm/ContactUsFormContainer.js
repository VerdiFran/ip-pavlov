import ContactUsForm from './ContactUsForm'
import emailApi from '../../../../api/emailApi'

/**
 * Container component for contact form
 * @returns {JSX.Element}
 * @constructor
 */
const ContactUsFormContainer = () => {
    const handleSubmit = async (values) => {
        const response = await emailApi.sendQuestion(values)
        if (response.status === 200) {
            console.log('Вопрос отправлен', values)
        }
    }

    return <ContactUsForm handleSubmit={handleSubmit}/>
}

export default ContactUsFormContainer