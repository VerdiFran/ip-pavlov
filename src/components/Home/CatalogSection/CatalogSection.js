import React from 'react'
import styles from './CatalogSection.module.scss'

/**
 * Section in Home page with categories from catalog
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogSection = ({categories}) => {
    return (
        <div>
            <h1 className="heading">Каталог товаров</h1>
            <div className={styles.categoriesContainer}>
                {
                    categories.map(category => (
                        <div className={styles.categoryContainer}>
                            <div className={styles.categoryNameBlock}>
                                <span
                                    className={styles.categoryName}
                                    style={{fontSize: category.title.length > 30 ? '16px' : '20px'}}
                                >{category.title}</span>
                            </div>
                            <img src="" alt="" height="80px" className={styles.categoryImage}/>
                        </div>
                    ))
                }
            </div>
            <button className={styles.toCatalogButton}>к другим категориям</button>
        </div>
    )
}

export default CatalogSection
