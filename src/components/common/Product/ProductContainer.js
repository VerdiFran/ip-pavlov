import Product from './Product'

const ProductContainer = ({productInfo, onClick, openCooperation}) => {
    return <Product
        onClick={onClick}
        description={productInfo.description}
        quantity={productInfo.quantity}
        unit={productInfo.unit}
        imageId={productInfo.image.id}
        openCooperation={openCooperation}
    />
}

export default ProductContainer
