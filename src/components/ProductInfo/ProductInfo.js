import styles from './ProductInfo.module.scss'
import {useRef, useState} from 'react'
import ImagePreloader from '../common/ImagePreloader/ImagePreloader'

/**
 * Component with information about product.
 */
const ProductInfo = ({product, productInfoVisible, onClose, productImage}) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const preloaderRef = useRef()
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
                <div ref={preloaderRef} className={styles.productImageContainer}>
                    <ImagePreloader
                        loaded={imageLoaded}
                        preloaderContainer={preloaderRef.current}
                        preloaderTitle="загрузка"
                    />
                    <img
                        className={styles.productImage}
                        src={productImage ? URL.createObjectURL(productImage) : ''}
                        alt=""
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
                <div className={styles.productInfoContainer}>
                    <span className={styles.productDescription}>{product?.description}</span>
                    <span className={styles.producer}>Производитель: {product?.producer?.name}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo