import CatalogSubmenu from './CatalogSubmenu'
import {getCategories} from '../../../../utils/selectors/catalogSelectors'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    categories: getCategories(state)
})

export default connect(mapStateToProps)(CatalogSubmenu)
