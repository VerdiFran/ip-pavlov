import React, {useEffect, useRef, useState} from 'react'
import ListWrapper from './../ListWrapper/ListWrapper'
import ProductContainer from '../../common/Product/ProductContainer'
import styles from './Products.module.scss'

/**
 * Section with list of products
 */
const Products = (props) => {
    const {
        products,
        loading,
        appendLoading,
        productsIsDownloaded,
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
        if (!loading && !appendLoading && !productsIsDownloaded) {
            setEmptyElement(emptyRef.current)
        } else {
            setEmptyElement(null)
        }
    }, [emptyRef, loading, appendLoading, productsIsDownloaded])

    useEffect(() => {
        if (!emptyElement) {
            return
        }
        cleanObserver()

        const newObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !loading && !appendLoading) {
                handleNextPage()
            }
        }, {options: observerOptions})

        setObserver(newObserver)
        newObserver.observe(emptyElement)
        return () => {
            cleanObserver()
        }

    }, [emptyElement, loading, appendLoading])

    return (
        <>
            <ListWrapper title="товары" loading={loading}>
                {
                    products.map(product =>
                        <ProductContainer productInfo={product} key={product.id}/>
                    )
                }
            </ListWrapper>
            {
                appendLoading && <div>loading...</div>
            }
            {
                !productsIsDownloaded && <div className={styles.buttonContainer} ref={emptyRef}/>
            }
        </>
    )
}

export default Products
