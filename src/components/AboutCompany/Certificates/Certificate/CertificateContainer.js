import Certificate from './Certificate'
import {useEffect, useState} from 'react'
import {imagesApi} from '../../../../api/imagesApi'

/**
 * Container component for certificate
 * @param certificate Information about certificate
 * @returns {JSX.Element}
 * @constructor
 */
const CertificateContainer = ({certificate}) => {
    const [certificateImage, setCertificateImage] = useState()

    const downloadImage = () => {
        imagesApi.downloadImage(certificate.image.id)
            .then(result => setCertificateImage(result))
    }

    useEffect(() => {
        downloadImage()
    }, [])

    return <Certificate certificate={certificate} image={certificateImage}/>
}

export default CertificateContainer