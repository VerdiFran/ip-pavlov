import styles from './ProductLink.module.scss'

const ProductLink = ({productId, productName, openProduct}) => {
    return (
        <span
            className={styles.link}
            onClick={() => openProduct(productId)}
        >
            {productName}
        </span>
    )
}

export default ProductLink