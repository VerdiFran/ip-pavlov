import {instance} from './instances'

/**
 * API for promotions.
 */
export const promotionsApi = {

    /**
     * Get request on promotions.
     * @return Promise with GET request.
     */
    getPromotions() {
        return instance.get('stocks')
    }
}