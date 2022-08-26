import {instance} from './instances'

const cooperationRequestsApi = {
    /**
     * POST new cooperation request.
     */
    sendCooperationRequest(cooperationRequest) {
        return instance.post('cooperation-requests', cooperationRequest)
    }
}

export default cooperationRequestsApi