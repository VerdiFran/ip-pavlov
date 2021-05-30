import React, {useEffect, useState} from 'react'
import CatalogPage from './CatalogPage'
import {connect} from 'react-redux'
import {downloadCategories, downloadProducts, removeProducts} from '../../redux/reducers/catalogReducer'

/**
 * Container for catalog page.
 */
const CatalogPageContainer = (props) => {
    const {
        downloadProducts,
        downloadCategories,
        removeProducts
    } = props

    const [categoriesLoading, setCategoriesLoading] = useState(false)
    const [productsLoading, setProductsLoading] = useState(false)

    const downloadCategoriesWithLoading = (searchTerm = '') => {
        setCategoriesLoading(true)
        downloadCategories(searchTerm).then(() => setCategoriesLoading(false))
    }

    const downloadProductsWithLoading = (searchTerm = '', producerIds = []) => {
        setProductsLoading(true)
        downloadProducts(searchTerm, producerIds).then(() => setProductsLoading(false))
    }

    useEffect(() => {
        downloadCategoriesWithLoading()
    }, [])

    useEffect(() => {
        downloadProductsWithLoading()
    }, [])

    const [searchTerm, setSearchTerm] = useState()
    const [producerIds, setProducerIds] = useState()

    useEffect(() => {
        if (searchTerm) {
            downloadCategoriesWithLoading(searchTerm)
        }
    }, [searchTerm])

    useEffect(() => {
        if (searchTerm) {
            removeProducts()
            downloadProductsWithLoading(searchTerm, producerIds)
        }
    }, [searchTerm])

    useEffect(() => {
        if (producerIds) {
            removeProducts()
            downloadProductsWithLoading(searchTerm, producerIds)
        }
    }, [producerIds])

    const appendProducts = () => {
        return downloadProducts(searchTerm, producerIds)
    }

    return <CatalogPage
        categoriesLoading={categoriesLoading}
        productsLoading={productsLoading}
        setSearchTerm={setSearchTerm}
        setProducerIds={setProducerIds}
        appendProducts={appendProducts}
        setCategoriesLoading={setCategoriesLoading}
        setProductsLoading={setProductsLoading}
        downloadCategoriesWithLoading={downloadCategoriesWithLoading}
        downloadProductsWithLoading={downloadProductsWithLoading}
    />
}

export default connect(
    null,
    {downloadProducts, downloadCategories, removeProducts}
)(CatalogPageContainer)










/*const [loading, setLoading] = useState(false)

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
}*/