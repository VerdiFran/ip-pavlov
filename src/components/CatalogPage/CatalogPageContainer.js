import React, {useEffect, useState} from 'react'
import CatalogPage from './CatalogPage'
import {connect} from 'react-redux'
import {getCategories} from '../../utils/selectors/catalogSelectors'
import catalogAPI from '../../api/catalogApi'
import {imagesApi} from '../../api/imagesApi'
import useDebounce from '../../hooks/useDebounce'

const mapStateToProps = (state) => ({
    categories: getCategories(state)
})

const CatalogPageContainer = ({categories}) => {
    const [products, setProducts] = useState([])
    const [productsImages, setProductsImages] = useState({})

    const [searchTerm, setSearchTerm] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    const [producerIds, setProducerIds] = useState([])

    const downloadProducts = async (name, producerIds) => {
        const {data: {content}} = await catalogAPI.getProducts(name, producerIds)
        setProducts(content)
    }

    const downloadProductsImages = () => {
        if (products.length) {
            products.forEach(product => {
                imagesApi.downloadImage(product.image.id, 'Products')
                    .then(result => setProductsImages(prev =>
                        ({
                            ...prev,
                            [`${product.id}`]: result
                        })
                    ))
            })
        }
    }

    useEffect(() => {
        downloadProducts()
    }, [])

    useEffect(() => {
        setIsSearching(true)
        downloadProducts(debouncedSearchTerm, producerIds).then(() => setIsSearching(false))
    }, [debouncedSearchTerm, producerIds])

    useEffect(() => {
        downloadProductsImages()
    }, [products])

    return <CatalogPage
        categories={categories}
        products={products}
        productsImages={productsImages}
        searchTerm={searchTerm}
        isSearching={isSearching}
        setSearchTerm={setSearchTerm}
        setProducerIds={setProducerIds}
        handleSearch={(searchTerm) => downloadProducts(searchTerm)}
    />
}

export default connect(mapStateToProps)(CatalogPageContainer)
