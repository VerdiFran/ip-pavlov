import React, {useEffect, useState} from 'react'
import CatalogHeader from './CatalogHeader'
import {getPartners} from '../../../utils/selectors/catalogSelectors'
import {connect} from 'react-redux'
import useDebounce from '../../../hooks/useDebounce'
import {useLocation} from 'react-router-dom'

const mapStateToProps = (state) => ({
    producers: getPartners(state)
})

const CatalogHeaderContainer = (props) => {
    const {
        producers,
        setDebouncedSearchTerm,
        setDebouncedProducerIds,
        specificCategoryName
    } = props

    const { search } = useLocation()
    const getUrlProducerId = () => {
        const query = new URLSearchParams(search)
        const producerId = query.get('producerId')
        return producerId
    }

    const [searchTerm, setSearchTerm] = useState()
    const [producerIds, setProducerIds] = useState([getUrlProducerId()])

    const debouncedSearchTerm = useDebounce(searchTerm, 500)
    const debouncedProducerIds = useDebounce(producerIds, 500)

    useEffect(() => {
        setDebouncedSearchTerm(debouncedSearchTerm)
    }, [debouncedSearchTerm])

    useEffect(() => {
        setDebouncedProducerIds(debouncedProducerIds)
    }, [debouncedProducerIds])

    useEffect(() => {
        if (searchTerm) {
            setSearchTerm('')
        }
    }, [specificCategoryName])

    return <CatalogHeader
        producers={producers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setProducerIds={setProducerIds}
    />
}

export default connect(mapStateToProps)(CatalogHeaderContainer)