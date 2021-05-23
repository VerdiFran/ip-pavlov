import React, {useEffect, useState} from 'react'
import CatalogPage from './CatalogPage'
import {connect} from 'react-redux'
import {getCategories} from '../../utils/selectors/catalogSelectors'
import catalogAPI from '../../api/catalogApi'
import {imagesApi} from '../../api/imagesApi'

const mapStateToProps = (state) => ({
    categories: getCategories(state)
})

const CatalogPageContainer = ({categories}) => {
    const [products, setProducts] = useState([])
    const [productsImages, setProductsImages] = useState({})

    const downloadProducts = async () => {
        const {data: {content}} = await catalogAPI.getProducts()
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
        downloadProductsImages()
    }, [products])

    return <CatalogPage categories={categories} products={products} productsImages={productsImages}/>
}

export default connect(mapStateToProps)(CatalogPageContainer)
