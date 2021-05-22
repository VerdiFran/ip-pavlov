import styles from './ProductInfo.module.scss'
import test from '../../assets/images/distributorsProducts/bearProduct.png'
import {useRef} from 'react'

const ProductInfo = ({productInfoVisible, onClose}) => {

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
            <div className={styles.modalContainer}>
                <div className={styles.productImageContainer}>
                    <img src={test} alt="product"/>
                </div>
                <div className={styles.productInfoContainer}>
                    <span className={styles.productDescription}>Test</span>
                    <span className={styles.producer}>Производитель: </span>
                    <span className={styles.price}>test</span>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo