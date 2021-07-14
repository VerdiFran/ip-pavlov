import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './CategoryCard.module.scss'

/**
 * Category of products in catalog
 * @param title Name of category
 * @param path Path to product of this category
 * @param image Image of category
 */
const CategoryCard = ({categoryInfo: {title, path, image}}) => {
    return (
        <NavLink to={path} className={styles.navLink}>
            <div className={styles.categoryCard}>
                <div className={styles.categoryImageContainer}>
                    <img
                        src={image ? URL.createObjectURL(image) : ''}
                        alt=""
                        className={styles.categoryImage}
                    />
                </div>
                <div className={styles.categoryName}>{title}</div>
            </div>
        </NavLink>
    )
}

export default CategoryCard
