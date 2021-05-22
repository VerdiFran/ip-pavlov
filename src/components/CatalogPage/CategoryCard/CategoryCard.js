import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './CategoryCard.module.scss'

/**
 * Category of products in catalog
 * @param title Name of category
 * @param path Path to product of this category
 * @param image Image of category
 * @returns {JSX.Element}
 * @constructor
 */
const CategoryCard = ({categoryInfo: {title, path, image}}) => {
    const fontSizes = {
        24: '14px',
        36: '12px',
        50: '10px'
    }

    const len = title.length
    const fontSize = len < 24
        ? '16px' : len > 50
            ? fontSizes[50] : len > 36
                ? fontSizes[36] : fontSizes[24]

    return (
        <div className={styles.categoryCard}>
            <NavLink to={path}>
                <div className={styles.categoryImageContainer}>
                    <img src={image} alt="" className={styles.categoryImage}/>
                </div>
                <div
                    className={styles.categoryName}
                    style={{fontSize: fontSize}}
                >{title}</div>
            </NavLink>
        </div>
    )
}

export default CategoryCard
