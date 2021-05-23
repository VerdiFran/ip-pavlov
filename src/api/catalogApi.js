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
    getProducts() {
        const config = {
            params: {

            }
        }

        return instance.get('products', config)
    }
}

export default catalogAPI
