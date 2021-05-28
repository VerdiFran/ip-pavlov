import React, {useEffect, useRef, useState} from 'react'
import CatalogPage from './CatalogPage'
import {connect} from 'react-redux'
import {getCategories, getProducts, getProductsIsDownloaded} from '../../utils/selectors/catalogSelectors'
import useDebounce from '../../hooks/useDebounce'
import {downloadProducts, removeProducts} from '../../redux/reducers/catalogReducer'

const mapStateToProps = (state) => ({
    categories: getCategories(state),
    products: getProducts(state),
    productsIsDownloaded: getProductsIsDownloaded(state)
})

const CatalogPageContainer = ({categories, products, productsIsDownloaded, downloadProducts, removeProducts}) => {
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
            (JSON.stringify(producerIdsRef.current) !== JSON.stringify(producerIds) && (producerIdsRef.current?.length || producerIds?.length)))
        {
            setIsSearching(true)
            removeProducts()
            setLoading(true)
            downloadProducts(debouncedSearchTerm, producerIds).then(() => {
                setIsSearching(false)
                setLoading(false)
            })
        }
    }, [debouncedSearchTerm, producerIds])

    useEffect(() => {
        debouncedSearchTermRef.current = debouncedSearchTerm
    })

    useEffect(() => {
        producerIdsRef.current = producerIds
    })

    const appendProducts = async () => {
        setLoading(true)
        await downloadProducts(debouncedSearchTerm, producerIds)
        setLoading(false)
    }
    const handleSearch = async (searchTerm) => {
        setLoading(true)
        await downloadProducts(searchTerm)
        setLoading(false)
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
    />
}

export default connect(mapStateToProps, {downloadProducts, removeProducts})(CatalogPageContainer)
