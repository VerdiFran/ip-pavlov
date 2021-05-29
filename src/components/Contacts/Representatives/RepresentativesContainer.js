import Representatives from './Representatives'
import {useEffect, useState} from 'react'
import {representativesApi} from '../../../api/representativesApi'

/**
 * Container for Representatives component.
 */
const RepresentativesContainer = () => {
    const [representatives, setRepresentatives] = useState([])

    useEffect(() => {
        representativesApi.getSalesRepresentatives()
            .then((response) => {
                setRepresentatives(response.data)
            })
    }, [])

    return <Representatives representatives={representatives}/>
}

export default RepresentativesContainer