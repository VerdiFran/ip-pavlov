import CategoriesList from './CategoriesList'
import {getCategories} from '../../../utils/selectors/catalogSelectors'
import {compose} from 'redux'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    categories: getCategories(state)
})

export default compose(connect(mapStateToProps))(CategoriesList)