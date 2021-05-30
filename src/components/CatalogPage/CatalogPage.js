import React from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import CatalogHeaderContainer from './CatalogHeader/CatalogHeaderContainer'
import CategoriesListContainer from './CategoriesList/CategoriesListContainer'
import ProductsContainer from './Products/ProductsContainer'

/**
 * Page that contains catalog
 */
const CatalogPage = (props) => {
    const {
        categoriesLoading,
        productsLoading,
        setSearchTerm,
        setProducerIds,
        appendProducts,
        setCategoriesLoading,
        setProductsLoading,
        downloadCategoriesWithLoading,
        downloadProductsWithLoading
    } = props

    return (
        <PageWrapper>
            <CatalogHeaderContainer
                setCategoriesLoading={setCategoriesLoading}
                setProductsLoading={setProductsLoading}
                setDebouncedSearchTerm={setSearchTerm}
                setDebouncedProducerIds={setProducerIds}
                downloadCategoriesWithLoading={downloadCategoriesWithLoading}
                downloadProductsWithLoading={downloadProductsWithLoading}
            />
            <CategoriesListContainer loading={categoriesLoading}/>
            <ProductsContainer loading={productsLoading} appendProducts={appendProducts}/>
        </PageWrapper>
    )
}

export default CatalogPage
