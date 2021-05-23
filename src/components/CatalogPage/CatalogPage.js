import React from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import CatalogHeaderContainer from './CatalogHeader/CatalogHeaderContainer'
import ListWrapper from './ListWrapper/ListWrapper'
import Product from '../common/Product/Product'
import CategoryCard from './CategoryCard/CategoryCard'

/**
 * Page with catalog
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogPage = ({categories, products, productsImages, searchTerm, isSearching, setSearchTerm, handleSearch}) => {
    return (
        <PageWrapper>
            <CatalogHeaderContainer
                searchTerm={searchTerm}
                isSearching={isSearching}
                setSearchTerm={setSearchTerm}
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
                        <Product
                            productInfo={{
                                ...product,
                                image: productsImages[product.id] || null
                            }}
                            key={product.id}
                        />
                    )
                }
            </ListWrapper>
        </PageWrapper>
    )
}

export default CatalogPage
