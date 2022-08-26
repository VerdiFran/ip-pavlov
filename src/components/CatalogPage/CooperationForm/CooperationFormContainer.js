import CooperationForm from './CooperationForm'
import cooperationRequestsApi from '../../../api/cooperationRequestsApi'
import {connect, useDispatch} from 'react-redux'
import {messageStatuses, showMessage} from '../../../redux/reducers/appReducer'

const CooperationFormContainer = ({objRef, close}) => {
    const dispatch = useDispatch()

    const handleSubmit = async (cooperationRequest) => {
        try {
            const response = await cooperationRequestsApi.sendCooperationRequest({
                ...cooperationRequest,
                company: cooperationRequest.companyName,
                phone: cooperationRequest.phoneNumber
            })

            if (response.status === 200) {
                dispatch(showMessage(messageStatuses.success, 'Ваш запрос успешно отправлен!'))
                close()
            }
        } catch {
            dispatch(showMessage(messageStatuses.error, 'Что-то пошло не так, попробуйте позже.'))
        }
    }

    return <CooperationForm handleSubmit={handleSubmit} objRef={objRef} close={close}/>
}

export default connect(null, {showMessage})(CooperationFormContainer)
