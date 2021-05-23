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
    getProducts(name) {
        const config = {
            params: {
                name
            }
        }

        return instance.get('products', config)
    },
    getPartners() {
        return instance.get('partners')
    }
}

export default catalogAPI
