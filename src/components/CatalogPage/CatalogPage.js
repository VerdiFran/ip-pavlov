import React, {useEffect, useRef, useState} from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import CatalogHeaderContainer from './CatalogHeader/CatalogHeaderContainer'
import ListWrapper from './ListWrapper/ListWrapper'
import CategoryCard from './CategoryCard/CategoryCard'
import ProductContainer from '../common/Product/ProductContainer'
import styles from './CatalogPage.module.scss'

/**
 * Page that contains catalog
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogPage = (props) => {
    const {
        categories,
        products,
        searchTerm,
        loading,
        isSearching,
        productsIsDownloaded,
        setSearchTerm,
        setProducerIds,
        handleSearch,
        handleNextPage
    } = props

    const emptyRef = useRef(null)
    const [emptyElement, setEmptyElement] = useState(null)
    const [observer, setObserver] = useState(null)

    const cleanObserver = () => {
        observer?.disconnect()
    }

    const observerOptions = {
        root: null,
        threshold: 1
    }

    useEffect(() => {
        if (!loading && !productsIsDownloaded) {
            setEmptyElement(emptyRef.current)
        } else {
            setEmptyElement(null)
        }
    }, [emptyRef, loading])

    useEffect(() => {
        if (!emptyElement) {
            return
        }
        cleanObserver()

        const newObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !loading) {
                handleNextPage()
            }
        }, {options: observerOptions})

        setObserver(newObserver)
        newObserver.observe(emptyElement)
        return () => {
            cleanObserver()
        }

    }, [emptyElement])

    return (
        <PageWrapper>
            <CatalogHeaderContainer
                searchTerm={searchTerm}
                isSearching={isSearching}
                setSearchTerm={setSearchTerm}
                setProducerIds={setProducerIds}
                handleSearch={handleSearch}
            />
            <ListWrapper title="категории">
                {
                    categories.map(category =>
                        <CategoryCard categoryInfo={category} key={category.id}/>
                    )
                }
            </ListWrapper>
            <ListWrapper title="товары">
                {
                    products.map(product =>
                        <ProductContainer productInfo={product} key={product.id}/>
                    )
                }
            </ListWrapper>
            {
                !productsIsDownloaded && <div className={styles.buttonContainer} ref={emptyRef}/>
            }
        </PageWrapper>
    )
}

export default CatalogPage
