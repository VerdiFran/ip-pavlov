import React, {useEffect, useRef, useState} from 'react'
import CatalogPage from './CatalogPage'
import {connect} from 'react-redux'
import {
    getCategories,
    getProducts,
    getProductsIsDownloaded,
    getProductsTotalPages
} from '../../utils/selectors/catalogSelectors'
import useDebounce from '../../hooks/useDebounce'
import {downloadCategories, downloadProducts, removeProducts} from '../../redux/reducers/catalogReducer'

const mapStateToProps = (state) => ({
    categories: getCategories(state),
    products: getProducts(state),
    productsIsDownloaded: getProductsIsDownloaded(state),
    productsTotalPages: getProductsTotalPages(state)
})

/**
 * Container for catalog page.
 */
const CatalogPageContainer = ({categories, products, productsIsDownloaded, productsTotalPages,
                                  downloadProducts, downloadCategories, removeProducts}) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        downloadProducts().then(() => setLoading(false))
    }, [])

    const [searchTerm, setSearchTerm] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    const [producerIds, setProducerIds] = useState([])

    const debouncedSearchTermRef = useRef()
    const producerIdsRef = useRef()

    useEffect(() => {
        if ((debouncedSearchTermRef.current !== debouncedSearchTerm && (debouncedSearchTermRef.current?.length || debouncedSearchTerm?.length)) ||
            (JSON.stringify(producerIdsRef.current) !== JSON.stringify(producerIds) && (producerIdsRef.current?.length || producerIds?.length))) {
            setIsSearching(true)
            removeProducts()
            setLoading(true)
            downloadProducts(debouncedSearchTerm, producerIds)
                .then(() => {
                    setIsSearching(false)
                    setLoading(false)
                })
            downloadCategories(debouncedSearchTerm)
        }
    }, [debouncedSearchTerm, producerIds])

    useEffect(() => {
        debouncedSearchTermRef.current = debouncedSearchTerm
    })

    useEffect(() => {
        producerIdsRef.current = producerIds
    })

    const appendProducts = () => {
        setLoading(true)
        downloadProducts(debouncedSearchTerm, producerIds)
            .then(() => {
                setLoading(false)
            })
    }

    const handleSearch = (searchTerm) => {
        setLoading(true)
        downloadProducts(searchTerm)
            .then(() => {
                setLoading(false)
            })
    }

    return <CatalogPage
        categories={categories}
        products={products}
        searchTerm={searchTerm}
        loading={loading}
        isSearching={isSearching}
        productsIsDownloaded={productsIsDownloaded}
        setSearchTerm={setSearchTerm}
        setProducerIds={setProducerIds}
        handleSearch={handleSearch}
        handleNextPage={appendProducts}
        productsTotalPages={productsTotalPages}
    />
}

export default connect(mapStateToProps, {downloadProducts, downloadCategories, removeProducts})(CatalogPageContainer)
