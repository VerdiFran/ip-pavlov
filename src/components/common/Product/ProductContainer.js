import Product from './Product'
import {useEffect, useState} from 'react'
import {imagesApi} from '../../../api/imagesApi'

/**
 * Container component for product card in catalog
 * @returns {JSX.Element}
 * @constructor
 */
const ProductContainer = ({productInfo, onClick}) => {
    const [imageBlob, setImageBlob] = useState(null)

    const {image} = productInfo

    useEffect(() => {
        if (image) {
            imagesApi.downloadImage(image.id, 'mini')
                .then(result => setImageBlob(result))
        }
    }, [image])

    return <Product onClick={onClick} productInfo={productInfo} image={imageBlob}/>
}

export default ProductContainer
