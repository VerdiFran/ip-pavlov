import {instance} from './instances'

const certificatesApi = {
    /**
     * GET request for getting certificates
     * @returns {*}
     */
    getCertificates() {
        return instance.get('certificates')
    }
}

export default certificatesApi