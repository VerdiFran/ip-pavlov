import {connect} from 'react-redux'
import CatalogSection from './CatalogSection'
import {getEightRandomCategories} from '../../../utils/selectors/catalogSelectors'

const mapStateToProps = (state) => ({
    categories: getEightRandomCategories(state)
})

export default connect(mapStateToProps)(CatalogSection)