import CatalogSubmenu from './CatalogSubmenu'
import {getCategories} from '../../../../utils/selectors/catalogSelectors'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    categories: getCategories(state)
})

const CatalogSubmenuContainer = ({categories}) => {
    return <CatalogSubmenu submenuItems={categories}/>
}

export default connect(mapStateToProps)(CatalogSubmenuContainer)
