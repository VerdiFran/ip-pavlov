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
        searchTerm,
        producerIds,
        productsLoading,
        isSpecificCategory,
        specificCategoryName,
        categoryIds,
        downloadCategories,
        downloadProducts,
        removeProducts,
        downloadProductsWithLoading,
        setProductsLoading,
        setSearchTerm,
        setProducerIds
    } = props

    const [categoriesLoading, setCategoriesLoading] = useState(false)

    const [currentProductVisible, setCurrentProductVisible] = useState(false)
    const [currentProduct, setCurrentProduct] = useState()
    const [currentProductImage, setCurrentProductImage] = useState()

    const downloadCategoriesWithLoading = (searchTerm = '') => {
        setCategoriesLoading(true)
        downloadCategories(searchTerm).then(() => setCategoriesLoading(false))
    }

    useEffect(() => {
        if (categoryIds) {
            removeProducts()
            downloadProductsWithLoading(searchTerm, producerIds, categoryIds)
        }
    }, [categoryIds])

    useEffect(() => {
        if (searchTerm) {
            removeProducts()
            downloadProductsWithLoading(searchTerm, producerIds, categoryIds)
        }
    }, [searchTerm])

    useEffect(() => {
        if (producerIds) {
            removeProducts()
            downloadProductsWithLoading(searchTerm, producerIds, categoryIds)
        }
    }, [producerIds])

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

    const appendProducts = () => {
        return downloadProducts(searchTerm, producerIds, categoryIds)
    }

    return (
        <div>
            <PageWrapper style={{padding: '60px 120px'}}>
                <div className={styles.heading}>
                    <NavLink to={TO_CATALOG} className={styles.toCatalog}>
                        {
                            isSpecificCategory && <Arrow type="left" height="14px" width="14px"/>
                        }
                        <span data-text="Каталог">Каталог</span>
                    </NavLink>
                    {
                        isSpecificCategory &&
                        <>
                            <div className={styles.headingDivider}/>
                            <span>{specificCategoryName}</span>
                        </>
                    }
                </div>
                <CatalogHeaderContainer
                    setCategoriesLoading={setCategoriesLoading}
                    setProductsLoading={setProductsLoading}
                    setDebouncedSearchTerm={setSearchTerm}
                    setDebouncedProducerIds={setProducerIds}
                    downloadCategoriesWithLoading={downloadCategoriesWithLoading}
                    downloadProductsWithLoading={downloadProductsWithLoading}
                />
                {
                    !isSpecificCategory && <CategoriesListContainer
                        searchTerm={searchTerm}
                        loading={categoriesLoading}
                        downloadCategoriesWithLoading={downloadCategoriesWithLoading}
                    />
                }
                <ProductsContainer
                    selectProduct={handleSetCurrent}
                    loading={productsLoading}
                    appendProducts={appendProducts}/>
            </PageWrapper>
            {currentProductVisible && <ProductInfo
                productInfoVisible={currentProductVisible}
                productImage={currentProductImage}
                product={currentProduct}
                onClose={handleClose}
            />}
        </div>
    )
}

export default CatalogPage
