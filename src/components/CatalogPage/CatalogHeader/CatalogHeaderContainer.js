import React from 'react'
import CatalogHeader from './CatalogHeader'
import {getPartners} from '../../../utils/selectors/catalogSelectors'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    partners: getPartners(state)
})

const CatalogHeaderContainer = ({partners}) => {
    return <CatalogHeader
        manufacturers={partners}
    />
}

export default connect(mapStateToProps)(CatalogHeaderContainer)