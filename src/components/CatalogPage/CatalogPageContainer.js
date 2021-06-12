import React, {useEffect, useState} from 'react'
import CatalogPage from './CatalogPage'
import {connect} from 'react-redux'
import {downloadCategories, downloadProducts, removeProducts} from '../../redux/reducers/catalogReducer'
import catalogAPI from '../../api/catalogApi'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import styles from './CatalogPage.module.scss'

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
    const [pageLoading, setPageLoading] = useState(true)
    const [productsLoading, setProductsLoading] = useState(false)

    const [searchTerm, setSearchTerm] = useState()
    const [producerIds, setProducerIds] = useState()

    const getCategoryInfo = async (categoryName) => {
        return await catalogAPI.getCategoryInfo(categoryName)
    }

    const downloadProductsWithLoading = (searchTerm = '', producerIds = [], categoryIds = []) => {
        setProductsLoading(true)
        return downloadProducts(searchTerm, producerIds, categoryIds).then(() => setProductsLoading(false))
    }

    useEffect(() => setPageLoading(true), [categoryName])

    useEffect(() => {
        if (categoryName) {
            setIsSpecificCategory(true)
            removeProducts()
            getCategoryInfo(categoryName).then(({data}) => {
                setCategoryIds([data.id])
                setSpecificCategoryName(data.name)
                setSpecificCategoryImageId(data.icon.id)
                downloadProductsWithLoading(searchTerm, producerIds, categoryIds)
                    .then(() => setPageLoading(false))
            })
        } else {
            setPageLoading(true)
            setIsSpecificCategory(false)
            removeProducts()
            setCategoryIds(null)
            setSpecificCategoryName(null)
            setSpecificCategoryImageId(null)
            downloadProductsWithLoading(searchTerm, producerIds)
                .then(() => setPageLoading(false))
        }
    }, [categoryName])

    return <>
        {
            pageLoading
                ? <div className={styles.catalogBody}>page is loading</div>
                : <CatalogPage
                    searchTerm={searchTerm}
                    producerIds={producerIds}
                    productsLoading={productsLoading}
                    isSpecificCategory={isSpecificCategory}
                    specificCategoryName={specificCategoryName}
                    categoryIds={categoryIds}
                    specificCategoryImageId={specificCategoryImageId}
                    downloadProducts={downloadProducts}
                    downloadCategories={downloadCategories}
                    removeProducts={removeProducts}
                    downloadProductsWithLoading={downloadProductsWithLoading}
                    setProductsLoading={setProductsLoading}
                    setSearchTerm={setSearchTerm}
                    setProducerIds={setProducerIds}
                />
        }
    </>
}

export default compose(
    withRouter,
    connect(null, {downloadProducts, downloadCategories, removeProducts})
)(CatalogPageContainer)