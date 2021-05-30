import CategoryCard from './CategoryCard/CategoryCard'
import ListWrapper from '../ListWrapper/ListWrapper'
import React from 'react'

/**
 * List with categories.
 * @param categories All categories.
 * @param images Category images.
 * @param loading Loading
 */
const CategoriesList = ({categories, images, loading}) => {
    const categoriesInfo = categories?.map(category => {
        const image = images?.find(image => image.categoryId === category.id)?.image
        return {
            ...category,
            image
        }
    })

    return (
        <ListWrapper title="категории" loading={loading}>
            {
                categoriesInfo.map(category =>
                    <CategoryCard categoryInfo={category} key={category.id}/>
                )
            }
        </ListWrapper>
    )
}

export default CategoriesList