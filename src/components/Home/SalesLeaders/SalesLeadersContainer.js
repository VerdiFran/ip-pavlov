import {getSalesLeaders} from '../../../utils/selectors/salesLeadersSelectors'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {downloadLeaders} from '../../../redux/reducers/leadersReducer'
import SalesLeaders from './SalesLeaders'
import {useEffect, useState} from 'react'
import {imagesApi} from '../../../api/imagesApi'

const mapStateToProps = (state) => ({
    leaders: getSalesLeaders(state)
})

/**
 * Container for sales leaders component.
 * @param props Properties.
 */
const SalesLeadersContainer = (props) => {
    const [categoryImages, setCategoryImages] = useState([])
    const [productImages, setProductImages] = useState([])
    const [leadersIsLoaded, setLeadersIsLoaded] = useState(false)

    useEffect(() => {
        props.downloadLeaders()
            .then(() => {
                setLeadersIsLoaded(true)
            })
    }, [])

    useEffect(() => {
        if (leadersIsLoaded) {
            props.leaders.forEach(leader => {
                imagesApi.downloadImage(leader.product.category.icon.id, 'normal')
                    .then((result) => {
                        setCategoryImages(prev => [...prev, {leaderId: leader.id, image: result}])
                    })
            })

            props.leaders.forEach(leader => {
                imagesApi.downloadImage(leader.product.id, 'Products')
                    .then((result) => {
                        setProductImages(prev => [...prev, {leaderId: leader.id, image: result}])
                    })
            })
        }
    }, [leadersIsLoaded])

    return <SalesLeaders
        leaders={props.leaders}
        categoryImages={categoryImages}
        productImages={productImages}
    />
}

export default compose(
    connect(mapStateToProps, {downloadLeaders})
)(SalesLeadersContainer)

