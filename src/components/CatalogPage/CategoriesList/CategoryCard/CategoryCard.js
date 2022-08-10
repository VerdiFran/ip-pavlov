import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './CategoryCard.module.scss'
import {baseURL} from "../../../../api/instances";

/**
 * Category of products in catalog
 */
const CategoryCard = ({title, path, imageId}) => {
    return (
        <NavLink to={path} className={styles.navLink}>
            <div className={styles.categoryCard}>
                <div className={styles.categoryImageContainer}>
                    <img
                        src={`${baseURL}/images/${imageId}/normal`}
                        alt={title}
                        className={styles.categoryImage}
                    />
                </div>
                <div className={styles.categoryName}>{title}</div>
            </div>
        </NavLink>
    )
}

export default CategoryCard
