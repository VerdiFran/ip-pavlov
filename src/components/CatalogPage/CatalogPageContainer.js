import React, {useEffect, useState} from 'react'
import CatalogPage from './CatalogPage'
import {connect} from 'react-redux'
import {downloadCategories, downloadProducts, removeProducts} from '../../redux/reducers/catalogReducer'
import catalogAPI from '../../api/catalogApi'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

/**
 * Container for catalog page.
 */
const CatalogPageContainer = (props) => {
    const {
        match: {params: {categoryName}},
        downloadProducts,
        downloadCategories,
        removeProducts
    } = props

    const [categoryIds, setCategoryIds] = useState()
    const [isSpecificCategory, setIsSpecificCategory] = useState(false)
    const [specificCategoryName, setSpecificCategoryName] = useState()
    const [specificCategoryImageId, setSpecificCategoryImageId] = useState()
    const [pageLoading, setPageLoading] = useState(false)

    const getCategoryInfo = async (categoryName) => {
        return await catalogAPI.getCategoryInfo(categoryName)
    }

    useEffect(() => {
        if (categoryName) {
            setIsSpecificCategory(true)
            setPageLoading(true)
            getCategoryInfo(categoryName).then(({data}) => {
                setCategoryIds([data.id])
                setSpecificCategoryName(data.name)
                setSpecificCategoryImageId(data.icon.id)
                setPageLoading(false)
            })
        } else {
            setIsSpecificCategory(false)
        }
    }, [])

    const [categoriesLoading, setCategoriesLoading] = useState(false)
    const [productsLoading, setProductsLoading] = useState(false)

    const downloadCategoriesWithLoading = (searchTerm = '') => {
        setCategoriesLoading(true)
        downloadCategories(searchTerm).then(() => setCategoriesLoading(false))
    }

    const downloadProductsWithLoading = (searchTerm = '', producerIds = [], categoryIds = []) => {
        setProductsLoading(true)
        downloadProducts(searchTerm, producerIds, categoryIds).then(() => setProductsLoading(false))
    }

    useEffect(() => {
        downloadProductsWithLoading(null, null, categoryIds)
    }, [])

    const [searchTerm, setSearchTerm] = useState()
    const [producerIds, setProducerIds] = useState()

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

    const appendProducts = () => {
        return downloadProducts(searchTerm, producerIds, categoryIds)
    }

    if (pageLoading) {
        return <div>page is loading</div>
    }

    return <CatalogPage
        isSpecificCategory={isSpecificCategory}
        specificCategoryName={specificCategoryName}
        productsLoading={productsLoading}
        categoriesLoading={categoriesLoading}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setProducerIds={setProducerIds}
        appendProducts={appendProducts}
        setCategoriesLoading={setCategoriesLoading}
        setProductsLoading={setProductsLoading}
        downloadProductsWithLoading={downloadProductsWithLoading}
        downloadCategoriesWithLoading={downloadCategoriesWithLoading}
    />
}

export default compose(
    withRouter,
    connect(null, {downloadProducts, downloadCategories, removeProducts})
)(CatalogPageContainer)