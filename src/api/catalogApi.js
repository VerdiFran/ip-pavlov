import {instance} from './instances'

const catalogAPI = {
    /**
     * GET request to receive names of categories
     * @returns {Promise}
     */
    getCategoriesNames(name) {
        const config = {
            params: {
                name,
                withProducts: false
            }
        }

        return instance.get('categories', config)
    },
    /**
     * GET request to receive products
     * @returns {Promise}
     */
    getProducts({name, producerIds, pageSize, currentPage, categoryIds}) {
        const config = {
            params: {
                name,
                producerIds: producerIds ? producerIds.join(',') : undefined,
                pageSize,
                pageNumber: currentPage,
                categoryIds: categoryIds ? categoryIds.join(',') : undefined
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
    },
    getCategoryInfo(categoryName) {
        return instance.get(`categories/${categoryName}`)
    }
}

export default catalogAPI
