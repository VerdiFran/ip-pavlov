import Partner from './Partner'
import {useEffect, useState} from 'react'
import {imagesApi} from '../../../../api/imagesApi'

/**
 * Container component for partner's card
 * @param partner Information about partner
 * @returns {JSX.Element}
 * @constructor
 */
const PartnerContainer = ({partner}) => {
    const [image, setImage] = useState()

    const downloadImage = () => {
        imagesApi.downloadImage(partner.image.id, 'Partners').then(result => setImage(result))
    }

    useEffect(() => {
        downloadImage()
    }, [])

    return <Partner partnerInfo={partner} image={image}/>
}

export default PartnerContainer