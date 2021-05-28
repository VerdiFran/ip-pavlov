import {instance} from './instances'

const catalogAPI = {
    /**
     * GET request to receive names of categories
     * @returns {Promise}
     */
    getCategoriesNames() {
        const config = {
            params: {
                withProducts: false
            }
        }

        return instance.get('categories', config)
    },
    /**
     * GET request to receive products
     * @returns {Promise}
     */
    getProducts(name, producerIds, pageSize, currentPage) {
        const config = {
            params: {
                name,
                producerIds: producerIds ? producerIds.join(',') : '',
                pageSize,
                pageNumber: currentPage
            }
        }

        return instance.get('products', config)
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
