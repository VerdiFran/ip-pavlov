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
    const [certificateImages, setCertificateImages] = useState()

    const downloadImage = (size) => {
        imagesApi.downloadImage(certificate.image.id, size)
            .then(result => setCertificateImages(images => ({...images, [size]: result})))
    }

    const downloadNormalSizeImage = () => {
        downloadImage('normal')
    }

    useEffect(() => {
        downloadImage('mini')
    }, [])

    return <Certificate
        certificate={certificate}
        images={certificateImages}
        downloadNormalSizeImage={downloadNormalSizeImage}
    />
}

export default CertificateContainer