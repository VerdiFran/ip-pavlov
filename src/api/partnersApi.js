import {instance} from './instances'

const partnersApi = {
    /**
     * GET request for getting partners
     * @returns {*}
     */
    getPartners() {
        return instance.get('partners')
    }
}

export default partnersApi