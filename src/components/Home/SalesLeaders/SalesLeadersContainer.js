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
                imagesApi.downloadImage(leader.product.category.icon.id)
                    .then((result) => {
                        setCategoryImages(prev => [...prev, {leaderId: leader.id, image: result}])
                    })
            })
        }
    }, [leadersIsLoaded])

    return <SalesLeaders
        leaders={props.leaders}
        categoryImages={categoryImages}
    />
}

export default compose(
    connect(mapStateToProps, {downloadLeaders})
)(SalesLeadersContainer)

