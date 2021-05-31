import React from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import CatalogHeaderContainer from './CatalogHeader/CatalogHeaderContainer'
import CategoriesListContainer from './CategoriesList/CategoriesListContainer'
import ProductsContainer from './Products/ProductsContainer'
import styles from './CatalogPage.module.scss'
import Arrow from '../common/Arrow/Arrow'

/**
 * Page that contains catalog
 */
const CatalogPage = (props) => {
    const {
        isSpecificCategory,
        specificCategoryName,
        productsLoading,
        categoriesLoading,
        searchTerm,
        setSearchTerm,
        setProducerIds,
        appendProducts,
        setCategoriesLoading,
        setProductsLoading,
        downloadCategoriesWithLoading,
        downloadProductsWithLoading
    } = props

    return (
        <PageWrapper style={{padding: '60px 120px'}}>
            <div className={styles.heading}>
                <div className={styles.toCatalog}>
                    {
                        isSpecificCategory && <Arrow type="left" height="14px" width="14px"/>
                    }
                    <span data-text="Каталог">Каталог</span>
                </div>
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
            <ProductsContainer loading={productsLoading} appendProducts={appendProducts}/>
        </PageWrapper>
    )
}

export default CatalogPage
