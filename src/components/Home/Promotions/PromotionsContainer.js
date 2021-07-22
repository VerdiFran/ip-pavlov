import {compose} from 'redux'
import {connect} from 'react-redux'
import Promotions from './Promotions'
import {useEffect} from 'react'
import {getPromotions} from '../../../utils/selectors/PromotionsSelectors'
import {downloadPromotions} from '../../../redux/reducers/promotionsReducer'

const mapStateToProps = (state) => ({
    promotions: getPromotions(state)
})

/**
 * Container for promotions component.
 * @param props Properties.
 */
const PromotionsContainer = ({promotions, downloadPromotions}) => {
    useEffect(() => {
        downloadPromotions().then()
    }, [])

    return <Promotions promotions={promotions}/>
}

export default compose(
    connect(mapStateToProps, {downloadPromotions})
)(PromotionsContainer)

