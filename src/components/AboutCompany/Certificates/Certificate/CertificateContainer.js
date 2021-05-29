import Certificate from './Certificate'
import {useEffect, useState} from 'react'

const CertificateContainer = ({certificate}) => {
    const [certificateImage, setCertificateImage] = useState()

    const downloadImage = () => {

    }

    useEffect(() => {
        downloadImage()
    }, [])

    return <Certificate certificate={certificate} image={certificateImage}/>
}

export default CertificateContainer