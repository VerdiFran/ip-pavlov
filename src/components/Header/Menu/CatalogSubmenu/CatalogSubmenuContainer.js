import CatalogSubmenu from './CatalogSubmenu'
import {getCategories} from '../../../../utils/selectors/catalogSelectors'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    categories: getCategories(state)
})

const CatalogSubmenuContainer = ({categories}) => {
    const downloadingPriceListLink = 'http://176.119.158.143:9090/api/v1/files/price-list'

    const priceListMenuItem = {
        title: 'скачать прайс-лист',
        special: true,
        action: () => window.open(downloadingPriceListLink)
    }

    const submenuItems = [priceListMenuItem].concat(categories)

    return <CatalogSubmenu submenuItems={submenuItems}/>
}

export default connect(mapStateToProps)(CatalogSubmenuContainer)
