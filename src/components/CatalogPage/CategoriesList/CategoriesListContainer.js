import CategoriesList from './CategoriesList'
import {imagesApi} from '../../../api/imagesApi'
import {useEffect, useState} from 'react'
import {getCategories} from '../../../utils/selectors/catalogSelectors'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    categories: getCategories(state)
})

/**
 * Container for CategoryList component.
 * @param categories List of categories.
 * @param loading Loading
 */
const CategoriesListContainer = ({categories, loading}) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        categories.forEach(category => {
            imagesApi.downloadImage(category.imageId, 'Categories')
                .then((image) => setImages((prev) => [...prev, {categoryId: category.id, image}]))
        })
    }, [categories])

    return <CategoriesList categories={categories} images={images} loading={loading}/>
}

export default connect(mapStateToProps)(CategoriesListContainer)