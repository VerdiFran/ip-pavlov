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
const Product = ({productInfo: {description, quantity, unit}, image, onClick, openCooperation}) => {
    return (
        <div className={styles.productContainer}>
            <div className={styles.productImageContainer} onClick={onClick}>
                <img src={image ? URL.createObjectURL(image) : ''} alt="" className={styles.productImage}/>
            </div>
            <div className={styles.productDescription} onClick={onClick}>
                <span>{description}</span>
                <span> ({quantity} {unit}.)</span>
            </div>
            <button
                className={styles.button}
                onClick={openCooperation}
            >Узнать цену</button>
        </div>
    )
}

export default Product
