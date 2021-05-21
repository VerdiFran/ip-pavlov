import React from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import CatalogHeaderContainer from './CatalogHeader/CatalogHeaderContainer'
import ListWrapper from './ListWrapper/ListWrapper'
import Product from '../common/Product/Product'

/**
 * Page with catalog
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogPage = ({products}) => {
    return (
        <PageWrapper>
            <CatalogHeaderContainer/>
            <ListWrapper title="категории">
                {

                }
            </ListWrapper>
            <ListWrapper title="товары">
                {
                    products.map(product =>
                        <Product productInfo={product} key={product.id}/>
                    )
                }
            </ListWrapper>
        </PageWrapper>
    )
}

export default CatalogPage
