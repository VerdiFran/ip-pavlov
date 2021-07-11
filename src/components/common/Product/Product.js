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
 */
const Product = ({productInfo: {description, quantity, unit}, image, onClick}) => {
    return (
        <div onClick={onClick} className={styles.productContainer}>
            <div className={styles.productImageContainer}>
                <img src={image ? URL.createObjectURL(image) : ''} alt="" className={styles.productImage}/>
            </div>
            <div className={styles.line}/>
            <div className={styles.productDescription}>
                <span>{description}</span>
                <span> ({quantity} {unit}.)</span>
            </div>
        </div>
    )
}

export default Product
