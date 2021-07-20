import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../../../utils/selectors/catalogSelectors'
import Products from './Products'
import {downloadProducts, removeProducts} from '../../../redux/reducers/catalogReducer'

const mapStateToProps = (state) => ({
    products: getProducts(state)
})

/**
 * Container for list of products.
 */
const ProductsContainer = (props) => {
    const {
        products,
        removeProducts,
        onClick,
        downloadProducts,
        specificCategoryId,
        categoryIsSpecified,
        searchTerm,
        producerIds,
        openCooperation
    } = props

    const [appendLoading, setAppendLoading] = useState(false)
    const [productsLoading, setProductsLoading] = useState(false)

    useEffect(() => {
        if (categoryIsSpecified && specificCategoryId === undefined) {
            return
        }

        removeProducts()
        setProductsLoading(true)
        downloadProducts(searchTerm, producerIds, specificCategoryId ? [specificCategoryId] : [])
            .then(() => setProductsLoading(false))
    }, [specificCategoryId, searchTerm, producerIds])

    const handleNextPage = () => {
        if (categoryIsSpecified && specificCategoryId === undefined) {
            return
        }

        setAppendLoading(true)
        downloadProducts(searchTerm, producerIds, [specificCategoryId])
            .then(() => setAppendLoading(false))
    }

    return (
        !productsLoading &&
        <Products
            onClick={onClick}
            products={products}
            loading={productsLoading}
            appendLoading={appendLoading}
            handleNextPage={handleNextPage}
            openCooperation={openCooperation}
        />
    )
}

export default connect(mapStateToProps, {downloadProducts, removeProducts})(ProductsContainer)
