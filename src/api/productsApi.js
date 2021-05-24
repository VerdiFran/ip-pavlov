import {instance} from './instances'

/**
 * API for products.
 */
export const productsApi = {

    /**
     * Returns GET request on product by id.
     * @param id Id of product.
     * @return {*}
     */
    getProductById(id) {
        return instance.get(`products/${id}`)
    }
}