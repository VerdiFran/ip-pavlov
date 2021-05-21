import React from 'react'
import styles from './Product.module.scss'

/**
 * Product card
 * @param image
 * @param description
 * @param quantity
 * @param price
 * @returns {JSX.Element}
 * @constructor
 */
const Product = ({productInfo: {image, description, quantity, price}}) => {
    return (
        <div className={styles.productContainer}>
            <div className={styles.productImageContainer}>
                <img src={image} alt="" className={styles.productImage}/>
            </div>
            <div className={styles.line}/>
            <div className={styles.productDescription}>
                <span>{description}</span>
                <span> ({quantity} шт.)</span>
            </div>
            <div className={styles.productPrice}>{price}&nbsp;₽</div>
        </div>
    )
}

export default Product
