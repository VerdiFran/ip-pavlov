import React from 'react'
import styles from './CatalogSection.module.scss'

/**
 * Section in Home page with categories from catalog
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogSection = () => {
    const categories = [
        'РАСТИТЕЛЬНОЕ МАСЛО',
        'МЯСНЫЕ КОНСЕРВЫ',
        'ДРОЖЖИ, ПЕКАРНЫЕ ПОРОШКИ И КОНЦЕНТРАТЫ',
        'ЧАЙ И КОФЕ',
        'КРУПЫ И МУКА',
        'МАКАРОННЫЕ ИЗДЕЛИЯ',
        'МАСЛИНЫ',
        'МОЛОЧНАЯ ПРОДУКЦИЯ'
    ]

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
                                    style={{fontSize: category.length > 30 ? '16px' : '20px'}}
                                >{category}</span>
                            </div>
                            <img src="" alt="" height="80px" className={styles.categoryImage}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CatalogSection
