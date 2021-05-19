import {instance} from './instances'

const catalogAPI = {
    getCategoriesNames() {
        const config = {
            params: {
                withProducts: false
            }
        }

        return instance.get('categories', config)
    }
}

export default catalogAPI
