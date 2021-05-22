import ProductInfo from './ProductInfo'
import {useEffect, useState} from 'react'
import {productsApi} from '../../api/productsApi'

/**
 * Container for ProductInfo component.
 */
const ProductInfoContainer = ({productId, productInfoVisible, onClose}) => {
    const [productIsLoading, setProductIsLoading] = useState(false)
    const [product, setProduct] = useState(null)

    useEffect(() => {
        try {
            setProductIsLoading(true)
            productsApi.getProductById(productId)
                .then((response) => {
                    setProduct(response.data)
                    setProductIsLoading(false)
                })
        } catch (error) {
            console.log(error)
        }
    }, [productId])

    return <ProductInfo
        product={product}
        productInfoVisible={productInfoVisible}
        onClose={onClose}
        productIsLoading={productIsLoading}
    />
}

export default ProductInfoContainer
