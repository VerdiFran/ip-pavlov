import React, {useEffect, useState} from 'react'
import catalogAPI from '../../../api/catalogApi'
import Partners from './Partners'

/**
 * Container for Partners component.
 */
const PartnersContainer = () => {
    const [partners, setPartners] = useState([])
    const numberPartnersToShow = 5

    useEffect(() => {
        catalogAPI.getPartners()
            .then((result) => {
                const sliceLength = result.data.length < numberPartnersToShow ? result.data.length
                    : numberPartnersToShow
                setPartners( result.data.slice(0, sliceLength))
            })
    }, [])

    return <Partners partners={partners}/>
}

export default PartnersContainer