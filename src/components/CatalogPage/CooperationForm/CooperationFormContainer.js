import CooperationForm from './CooperationForm'
import cooperationRequestsApi from '../../../api/cooperationRequestsApi'

const CooperationFormContainer = ({objRef, close}) => {
    const handleSubmit = (cooperationRequest) => {
        cooperationRequestsApi.sendCooperationRequest({
            ...cooperationRequest,
            company: cooperationRequest.companyName,
            phone: cooperationRequest.phoneNumber
        })
    }

    return <CooperationForm handleSubmit={handleSubmit} objRef={objRef} close={close}/>
}

export default CooperationFormContainer
