import React from 'react'
import styles from './Product.module.scss'

/**
 * Product card
 * @param image Image of product
 * @param description Description of product
 * @param quantity Quantity of product
 * @param price Price of product
 * @param unit Unit of product quantity
 * @returns {JSX.Element}
 * @constructor
 */
const Product = ({productInfo: {image, description, quantity, price, unit}}) => {
    return (
        <div className={styles.productContainer}>
            <div className={styles.productImageContainer}>
                <img src={image ? URL.createObjectURL(image) : ''} alt="" className={styles.productImage}/>
            </div>
            <div className={styles.line}/>
            <div className={styles.productDescription}>
                <span>{description}</span>
                <span> ({quantity} {unit}.)</span>
            </div>
            <div className={styles.productPrice}>
                {(Math.round(price * 100) / 100).toFixed(2)}&nbsp;₽
            </div>
        </div>
    )
}

export default Product
