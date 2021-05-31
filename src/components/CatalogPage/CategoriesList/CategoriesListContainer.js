import CategoriesList from './CategoriesList'
import {imagesApi} from '../../../api/imagesApi'
import {useEffect, useState} from 'react'
import {getCategories} from '../../../utils/selectors/catalogSelectors'
import {connect} from 'react-redux'
import {downloadCategories} from '../../../redux/reducers/catalogReducer'

const mapStateToProps = (state) => ({
    categories: getCategories(state)
})

/**
 * Container for CategoryList component.
 * @param categories List of categories.
 * @param searchTerm
 * @param downloadCategories
 */
const CategoriesListContainer = ({categories, loading, searchTerm, downloadCategoriesWithLoading}) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        downloadCategoriesWithLoading()
    }, [])

    useEffect(() => {
        downloadCategoriesWithLoading(searchTerm)
    }, [searchTerm])

    useEffect(() => {
        categories.forEach(category => {
            imagesApi.downloadImage(category.imageId)
                .then((image) => setImages((prev) => [...prev, {categoryId: category.id, image}]))
        })
    }, [categories])

    return <CategoriesList categories={categories} images={images} loading={loading}/>
}

export default connect(mapStateToProps, {downloadCategories})(CategoriesListContainer)