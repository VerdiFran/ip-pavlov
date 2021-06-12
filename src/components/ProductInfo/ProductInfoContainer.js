import {useEffect, useState} from 'react'
import {imagesApi} from '../../api/imagesApi'
import ProductInfo from './ProductInfo'

/**
 * Container for product info card.
 */
const ProductInfoContainer = ({product, productInfoVisible, onClose}) => {
    const [image, setImage] = useState(null)

    useEffect(() => {
        imagesApi.downloadImage(product.image.id)
            .then((result) => setImage(result))
    }, [])

    return <ProductInfo
        product={product}
        productInfoVisible={productInfoVisible}
        onClose={onClose}
        productImage={image}
    />
}

export default ProductInfoContainer