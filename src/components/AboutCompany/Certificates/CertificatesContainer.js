import Certificates from './Certificates'
import {useEffect, useState} from 'react'
import certificatesApi from '../../../api/certificatesApi'

/**
 * Container component for list of certificates
 * @returns {JSX.Element}
 * @constructor
 */
const CertificatesContainer = () => {
    const [certificates, setCertificates] = useState([])

    const downloadCertificates = async () => {
        const {data} = await certificatesApi.getCertificates()
        setCertificates(data)
    }

    useEffect(() => {
        downloadCertificates().then()
    }, [])

    return <Certificates certificates={certificates}/>
}

export default CertificatesContainer