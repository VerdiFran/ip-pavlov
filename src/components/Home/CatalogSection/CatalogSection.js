import React from 'react'
import styles from './CatalogSection.module.scss'
import {NavLink} from 'react-router-dom'
import {TO_CATALOG} from '../../../routes'

/**
 * Section in Home page with categories from catalog
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogSection = ({categories, images}) => {
    return (
        <div>
            <h1 className="heading">Каталог товаров</h1>
            <div className={styles.categoriesContainer}>
                {
                    categories.map(category => (
                        <div className={styles.categoryContainer} key={category.id}>
                            <NavLink to={category.path}>
                                <div className={styles.categoryNameBlock}>
                                <span
                                    className={styles.categoryName}
                                    style={{fontSize: category.title.length > 30 ? '16px' : '20px'}}
                                >{category.title}</span>
                                </div>
                            </NavLink>
                            <img
                                src={images[category.id] ? URL.createObjectURL(images[category.id]) : ''}
                                alt=""
                                height="80px"
                                className={styles.categoryImage}
                            />
                        </div>
                    ))
                }
            </div>
            <NavLink to={TO_CATALOG} className={styles.toCatalogButton}>к другим категориям</NavLink>
        </div>
    )
}

export default CatalogSection
