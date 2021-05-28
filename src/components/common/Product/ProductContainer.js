import Product from './Product'
import {useEffect, useState} from 'react'
import {imagesApi} from '../../../api/imagesApi'

/**
 * Container component for product card in catalog
 * @param productInfo
 * @returns {JSX.Element}
 * @constructor
 */
const ProductContainer = ({productInfo}) => {
    const [imageBlob, setImageBlob] = useState(null)

    const {image} = productInfo

    useEffect(() => {
        if (image) {
            imagesApi.downloadImage(image.id, 'Products')
                .then(result => setImageBlob(result))
        }
    }, [image])

    return <Product productInfo={productInfo} image={imageBlob}/>
}

export default ProductContainer
