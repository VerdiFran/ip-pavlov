import CategoryCard from './CategoryCard/CategoryCard'
import ListWrapper from '../ListWrapper/ListWrapper'
import React from 'react'

const CategoriesList = ({categories}) => {
    return categories.length > 0 && <ListWrapper title="категории">
        {
            categories.map(category =>
                <CategoryCard title={category.title} path={category.path} imageId={category.imageId} key={category.id}/>
            )
        }
    </ListWrapper>
}

export default CategoriesList