import React from 'react'
import styles from './Product.module.scss'
import {baseURL} from "../../../api/instances";

const Product = ({description, quantity, unit, imageId, onClick, openCooperation}) => {
    return (
        <div className={styles.productContainer}>
            <div className={styles.productImageContainer} onClick={onClick}>
                <img src={`${baseURL}/images/${imageId}/mini`} alt="" className={styles.productImage}/>
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
