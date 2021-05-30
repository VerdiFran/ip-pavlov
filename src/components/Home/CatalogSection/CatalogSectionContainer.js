import {connect} from 'react-redux'
import CatalogSection from './CatalogSection'
import {getEightRandomCategories} from '../../../utils/selectors/catalogSelectors'
import {useEffect, useState} from 'react'
import {imagesApi} from '../../../api/imagesApi'

const mapStateToProps = (state) => ({
    categories: getEightRandomCategories(state)
})

const CatalogSectionContainer = ({categories}) => {
    const [images, setImages] = useState({})

    const downloadImages = () => {
        categories.forEach(category =>
            imagesApi.downloadImage(category.icon.id)
                .then(result => setImages(images => ({
                    ...images,
                    [category.id]: result
                }))))
    }

    useEffect(() => {
        if (categories.length) {
            downloadImages()
        }
    }, [categories])

    return <CatalogSection
        categories={categories}
        images={images}
    />
}

export default connect(mapStateToProps)(CatalogSectionContainer)