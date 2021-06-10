import React, {useEffect, useState} from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import CatalogHeaderContainer from './CatalogHeader/CatalogHeaderContainer'
import CategoriesListContainer from './CategoriesList/CategoriesListContainer'
import ProductsContainer from './Products/ProductsContainer'
import styles from './CatalogPage.module.scss'
import Arrow from '../common/Arrow/Arrow'
import {NavLink} from 'react-router-dom'
import {TO_CATALOG} from '../../routes'
import ProductInfo from '../ProductInfo/ProductInfo'
import {imagesApi} from '../../api/imagesApi'

/**
 * Page that contains catalog
 */
const CatalogPage = (props) => {
    const {
        specificCategoryName,
        specificCategoryId
    } = props

    const [currentProductVisible, setCurrentProductVisible] = useState(false)
    const [currentProduct, setCurrentProduct] = useState()
    const [currentProductImage, setCurrentProductImage] = useState()

    const [producerIds, setProducerIds] = useState()
    const [searchTerm, setSearchTerm] = useState()

    useEffect(() => {
        if (!currentProduct) {
            return
        }

        imagesApi.downloadImage(currentProduct.image.id, 'mini')
            .then((response) => setCurrentProductImage(response))
    }, [currentProduct])

    const handleClose = () => {
        setCurrentProduct(null)
        setCurrentProductImage(null)
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
                />
                {
                    (!specificCategoryName) &&
                    <CategoriesListContainer searchTerm={searchTerm}/>
                }
                <ProductsContainer
                    onClick={handleSetCurrent}
                    specificCategoryId={specificCategoryId}
                    searchTerm={searchTerm}
                    producerIds={producerIds}
                />
            </PageWrapper>
            {
                currentProductVisible &&
                <ProductInfo
                    productInfoVisible={currentProductVisible}
                    productImage={currentProductImage}
                    product={currentProduct}
                    onClose={handleClose}
                />
            }
        </div>
    )
}

export default CatalogPage
