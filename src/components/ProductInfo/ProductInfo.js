import styles from './ProductInfo.module.scss'
import {useRef} from 'react'

/**
 * Component with information about product.
 */
const ProductInfo = ({product, productInfoVisible, onClose, productImage}) => {
    const backgroundRef = useRef()

    const modalStyle = {
        visibility: productInfoVisible ? 'visible' : 'hidden'
    }

    const handleBackgroundClick = (event) => {
        if (event.target === backgroundRef.current) {
            onClose()
        }
    }

    return (
        <div
            ref={backgroundRef}
            style={modalStyle}
            className={styles.modalBackground}
            onClick={handleBackgroundClick}
        >
            <div style={modalStyle} className={styles.modalContainer}>
                <div className={styles.productImageContainer}>
                    <img className={styles.productImage} src={productImage ? URL.createObjectURL(productImage) : ''}
                         alt="product"/>
                </div>
                <div className={styles.productInfoContainer}>
                    <span className={styles.productDescription}>{product?.description}</span>
                    <span className={styles.producer}>Производитель: {product?.producer?.name}</span>
                    <span className={styles.price}>{product?.price}₽</span>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo