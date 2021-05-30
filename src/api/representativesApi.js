import {instance} from './instances'

/**
 * API for sales representatives.
 */
export const representativesApi = {

    /**
     * Returns GET request for all sales representatives.
     */
    getSalesRepresentatives: () => {
        return instance.get('representatives')
    }
}