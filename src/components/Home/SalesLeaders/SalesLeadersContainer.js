import {getSalesLeaders} from "../../../utils/selectors/salesLeadersSelectors";
import {compose} from 'redux'
import {connect} from 'react-redux'
import {downloadLeaders} from '../../../redux/reducers/leadersReducer'
import SalesLeaders from './SalesLeaders'
import { useEffect, useState} from 'react';
import {imagesApi} from '../../../api/imagesApi'

const mapStateToProps = (state) => ({
    leaders: getSalesLeaders(state)
})

/**
 * Container for sales leaders component.
 * @param props Properties.
 */
const SalesLeadersContainer = (props) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        props.downloadLeaders()
    }, [])

    useEffect(() => {
        if (props.leaders) {
            props.leaders.map(leader => {
                imagesApi.downloadImage(leader.product.category.icon.id, 'Categories').then((result) => {
                    setImages(prev => [...prev, {leaderId: leader.id, image: result}])
                })
            })
        }
    }, [props.leaders])

    return <SalesLeaders leaders={props.leaders} images={images}/>
}

export default compose(
    connect(mapStateToProps, {downloadLeaders})
)(SalesLeadersContainer)

