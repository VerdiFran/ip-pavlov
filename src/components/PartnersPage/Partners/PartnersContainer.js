import Partners from './Partners'
import {useEffect, useState} from 'react'
import partnersApi from '../../../api/partnersApi'

/**
 * Container component for list of partners
 * @returns {JSX.Element}
 * @constructor
 */
const PartnersContainer = () => {
    const [partners, setPartners] = useState([])

    const downloadPartners = async () => {
        const {data} = await partnersApi.getPartners()
        setPartners(data)
    }

    useEffect(() => {
        downloadPartners().then()
    }, [])

    return <Partners partners={partners}/>
}

export default PartnersContainer