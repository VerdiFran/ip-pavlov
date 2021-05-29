import Partner from './Partner'
import {useEffect, useState} from 'react'

const PartnerContainer = ({partner}) => {
    const [image, setImage] = useState()

    const downloadImage = () => {

    }

    useEffect(() => {
        downloadImage()
    }, [])

    return <Partner partnerInfo={partner}/>
}

export default PartnerContainer