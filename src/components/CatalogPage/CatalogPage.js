import React, {useState} from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import CatalogHeaderContainer from './CatalogHeader/CatalogHeaderContainer'
import CategoriesListContainer from './CategoriesList/CategoriesListContainer'
import ProductsContainer from './Products/ProductsContainer'
import styles from './CatalogPage.module.scss'
import Arrow from '../common/Arrow/Arrow'
import {NavLink} from 'react-router-dom'
import {TO_CATALOG} from '../../routes'
import ProductInfoContainer from '../ProductInfo/ProductInfoContainer'

/**
 * Page that contains catalog
 */
const CatalogPage = (props) => {
    const {
        specificCategoryName,
        specificCategoryId,
        categoryIsSpecified
    } = props

    const [currentProductVisible, setCurrentProductVisible] = useState(false)
    const [currentProduct, setCurrentProduct] = useState()

    const [producerIds, setProducerIds] = useState()
    const [searchTerm, setSearchTerm] = useState()

    const handleClose = () => {
        setCurrentProduct(null)
        setCurrentProductVisible(false)
    }

    const handleSetCurrent = (current) => {
        setCurrentProduct(current)
        setCurrentProductVisible(true)
    }

    return (
        <div>
            <PageWrapper style={{padding: '60px 120px'}}>
                <div className={styles.heading}>
                    <NavLink to={TO_CATALOG} className={styles.toCatalog}>
                        {
                            specificCategoryName && <Arrow type="left" height="14px" width="14px"/>
                        }
                        <span data-text="Каталог">Каталог</span>
                    </NavLink>
                    {
                        specificCategoryName &&
                        <>
                            <div className={styles.headingDivider}/>
                            <span>{specificCategoryName}</span>
                        </>
                    }
                </div>
                <CatalogHeaderContainer
                    setDebouncedSearchTerm={setSearchTerm}
                    setDebouncedProducerIds={setProducerIds}
                    specificCategoryName={specificCategoryName}
                />
                {
                    (!categoryIsSpecified) &&
                    <CategoriesListContainer searchTerm={searchTerm}/>
                }
                <ProductsContainer
                    onClick={handleSetCurrent}
                    categoryIsSpecified={categoryIsSpecified}
                    specificCategoryId={specificCategoryId}
                    searchTerm={searchTerm}
                    producerIds={producerIds}
                />
            </PageWrapper>
            {
                currentProductVisible &&
                <ProductInfoContainer
                    productInfoVisible={currentProductVisible}
                    product={currentProduct}
                    onClose={handleClose}
                />
            }
        </div>
    )
}

export default CatalogPage
