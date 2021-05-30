import React, {useState} from 'react'
import {connect} from 'react-redux'
import {getProducts, getProductsIsDownloaded} from '../../../utils/selectors/catalogSelectors'
import Products from './Products'

const mapStateToProps = (state) => ({
    products: getProducts(state),
    productsIsDownloaded: getProductsIsDownloaded(state)
})

/**
 * Container for list of products.
 */
const ProductsContainer = (props) => {
    const {
        products,
        productsIsDownloaded,
        loading,
        appendProducts
    } = props

    const [appendLoading, setAppendLoading] = useState(false)

    const handleNextPage = () => {
        setAppendLoading(true)
        appendProducts().then(() => setAppendLoading(false))
    }

    return <Products
        products={products}
        productsIsDownloaded={productsIsDownloaded}
        loading={loading}
        appendLoading={appendLoading}
        handleNextPage={handleNextPage}
    />
}

export default connect(mapStateToProps)(ProductsContainer)
