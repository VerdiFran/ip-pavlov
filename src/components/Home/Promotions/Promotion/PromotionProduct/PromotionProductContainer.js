import {useEffect, useState} from 'react'
import PromotionProduct from './PromotionProduct'
import {imagesApi} from '../../../../../api/imagesApi'

const PromotionProductContainer = ({productInfo, openProduct}) => {
    const [productImage, setProductImage] = useState()

    useEffect(() => {
        downloadProductImage(productInfo.image.id).then()
    }, [])

    const downloadProductImage = async (productId) => {
        await imagesApi.downloadImage(productId, 'mini').then(response => setProductImage(response))
    }

    return <PromotionProduct
        productInfo={{id: productInfo.id}}
        image={productImage}
        openProduct={() => openProduct(productInfo.id)}
    />
}

export default PromotionProductContainer