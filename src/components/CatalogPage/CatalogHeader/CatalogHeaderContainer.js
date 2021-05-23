import React from 'react'
import CatalogHeader from './CatalogHeader'
import {getPartners} from '../../../utils/selectors/catalogSelectors'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    partners: getPartners(state)
})

const CatalogHeaderContainer = (props) => {
    const {
        partners,
        searchTerm,
        isSearching,
        setSearchTerm,
        setProducerIds,
        handleSearch
    } = props

    return <CatalogHeader
        manufacturers={partners}
        searchTerm={searchTerm}
        isSearching={isSearching}
        setSearchTerm={setSearchTerm}
        setProducerIds={setProducerIds}
        handleSearch={handleSearch}
    />
}

export default connect(mapStateToProps)(CatalogHeaderContainer)