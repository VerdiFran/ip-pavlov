import {instance} from './instances'

/**
 * API for sales leaders.
 */
export const salesLeadersApi = {

    /**
     * Get request on sales leaders.
     * @return Promise with GET request.
     */
    getSalesLeaders() {
        return instance.get('sales-leaders')
    }
}