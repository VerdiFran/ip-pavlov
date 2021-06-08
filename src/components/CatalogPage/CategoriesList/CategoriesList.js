import CategoryCard from './CategoryCard/CategoryCard'
import ListWrapper from '../ListWrapper/ListWrapper'
import React from 'react'

/**
 * List with categories.
 * @param categories All categories.
 * @param images Category images.
 */
const CategoriesList = ({categories, images}) => {
    const categoriesInfo = categories?.map(category => {
        const image = images?.find(image => image.categoryId === category.id)?.image
        return {
            ...category,
            image
        }
    }) ?? []

    return (
        <ListWrapper title="категории">
            {
                categoriesInfo.map(category =>
                    <CategoryCard categoryInfo={category} key={category.id}/>
                )
            }
        </ListWrapper>
    )
}

export default CategoriesList