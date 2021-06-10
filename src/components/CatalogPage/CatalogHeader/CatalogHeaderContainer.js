import React, {useEffect, useState} from 'react'
import CatalogHeader from './CatalogHeader'
import {getPartners} from '../../../utils/selectors/catalogSelectors'
import {connect} from 'react-redux'
import useDebounce from '../../../hooks/useDebounce'

const mapStateToProps = (state) => ({
    producers: getPartners(state)
})

const CatalogHeaderContainer = (props) => {
    const {
        producers,
        setDebouncedSearchTerm,
        setDebouncedProducerIds
    } = props

    const [searchTerm, setSearchTerm] = useState()
    const [producerIds, setProducerIds] = useState()

    const debouncedSearchTerm = useDebounce(searchTerm, 500)
    const debouncedProducerIds = useDebounce(producerIds, 500)

    useEffect(() => {
        setDebouncedSearchTerm(debouncedSearchTerm)
    }, [debouncedSearchTerm])

    useEffect(() => {
        setDebouncedProducerIds(debouncedProducerIds)
    }, [debouncedProducerIds])

    return <CatalogHeader
        producers={producers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setProducerIds={setProducerIds}
    />
}

export default connect(mapStateToProps)(CatalogHeaderContainer)