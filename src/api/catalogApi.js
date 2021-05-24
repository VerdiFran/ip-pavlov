import {instance} from './instances'

const catalogAPI = {
    getCategoriesNames() {
        const config = {
            params: {
                withProducts: false
            }
        }

        return instance.get('categories', config)
    },
    /**
     * GET request to receive partners
     * @returns {Promise}
     */
    getPartners() {
        return instance.get('partners')
    }
}

export default catalogAPI
