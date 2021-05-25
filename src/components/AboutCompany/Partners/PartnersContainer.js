import React, {useEffect, useState} from 'react'
import catalogAPI from '../../../api/catalogApi'
import Partners from './Partners'

/**
 * Container for Partners component.
 */
const PartnersContainer = () => {
    const [partners, setPartners] = useState([])

    useEffect(() => {
        catalogAPI.getPartners()
            .then((result) => {
                setPartners(result.data)
            })
    }, [])

    return <Partners partners={partners}/>
}

export default PartnersContainer