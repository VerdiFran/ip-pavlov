import React from 'react'
import CatalogHeader from './CatalogHeader'
import {getPartners} from '../../../utils/selectors/catalogSelectors'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    partners: getPartners(state)
})

const CatalogHeaderContainer = ({partners, searchTerm, isSearching, setSearchTerm, handleSearch}) => {
    return <CatalogHeader
        manufacturers={partners}
        searchTerm={searchTerm}
        isSearching={isSearching}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
    />
}

export default connect(mapStateToProps)(CatalogHeaderContainer)