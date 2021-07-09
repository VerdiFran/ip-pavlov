import React, {useEffect, useState} from 'react'
import styles from './CatalogSection.module.scss'
import {NavLink} from 'react-router-dom'
import {TO_CATALOG} from '../../../routes'
import useWindowDimensions from '../../../hooks/useWindowDimensions'

/**
 * Section in Home page with categories from catalog
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogSection = ({categories, images}) => {
    const {width} = useWindowDimensions()

    const [fontSizes, setFontSizes] = useState({min: '16px', max: '20px'})

    useEffect(() => {
        if (width > 1200) {
            setFontSizes({min: '16px', max: '20px'})
        } else if (width > 1000) {
            setFontSizes({min: '14px', max: '18px'})
        } else if (width > 800) {
            setFontSizes({min: '12px', max: '16px'})
        } else if (width > 600) {
            setFontSizes({min: '10px', max: '14px'})
        } else {
            setFontSizes({min: '8px', max: '12px'})
        }
    }, [width])

    return (
        <div>
            <h1 className="heading">Каталог товаров</h1>
            <div className={styles.categoriesContainer}>
                {
                    categories?.map(category => (
                        <div className={styles.categoryContainer} key={category.id}>
                            <NavLink to={category.path}>
                                <div className={styles.categoryNameBlock}>
                                <span
                                    className={styles.categoryName}
                                    style={{fontSize: category.title.length > 30 ? fontSizes.min : fontSizes.max}}
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
