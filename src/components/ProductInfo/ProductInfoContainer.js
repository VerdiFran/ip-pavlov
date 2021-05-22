import ProductInfo from './ProductInfo'

const ProductInfoContainer = ({productInfoVisible, onClose}) => {

    return <ProductInfo productInfoVisible={productInfoVisible} onClose={onClose}/>
}

export default ProductInfoContainer
