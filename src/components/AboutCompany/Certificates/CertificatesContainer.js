import Certificates from './Certificates'
import {useEffect, useState} from 'react'

const CertificatesContainer = () => {
    const [certificates, setCertificates] = useState([])

    const getCertificates = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('resolve')
                resolve([
                    {
                        id: 0,
                        description: 'iehrge urgihewrugh rughwpeiurghe rughupier hguerhguerh geoihero g eohrg',
                        image: {
                            id: 52,
                            url: 'https://bmb56.ru/uploads/diplomas/n-2kc4bxcya-dade9505e4.jpg'
                        }
                    },
                    {
                        id: 1,
                        description: 'iehrge urgihewrugh rughwpeiurghe rughupier hguerhguerh geoihero g eohrg',
                        image: {
                            id: 53,
                            url: 'https://photonomy.ru/uploads/images/certs/152-963-10069_light.jpg'
                        }
                    },
                    {
                        id: 2,
                        description: 'iehrgihuh griueh rguhiug hheirghauhg rughei gairg  ergerg aerg erg arg e urgihewrugh rughwpeiurghe rughupier hguerhguerh geoihero g eohrg',
                        image: {
                            id: 54,
                            url: 'https://luckclub.ru/images/luckclub/2021/01/012-6.jpg'
                        }
                    },
                    {
                        id: 3,
                        description: 'iehrge urgihewrugh rughwpeiurghe rughupier hguerhguerh geoihero g eohrg',
                        image: {
                            id: 54,
                            url: 'https://bmb56.ru/uploads/diplomas/n-2kc4bxcya-dade9505e4.jpg'
                        }
                    },
                    {
                        id: 4,
                        description: 'iehrge urgihewrugh rughwpeiurghe rughupier hguerhguerh geoihero g eohrg',
                        image: {
                            id: 54,
                            url: 'https://bmb56.ru/uploads/diplomas/n-2kc4bxcya-dade9505e4.jpg'
                        }
                    },
                    {
                        id: 5,
                        description: 'iehrge hiu uiehgir guehrighauerh ur giheuhrguh urgihewrugh rughwpeiurghe rughupier hguerhguerh geoihero g eohrg',
                        image: {
                            id: 54,
                            url: 'https://multiurok.ru/img/278341/image_58e1e1fb81fdf.jpg'
                        }
                    },
                ])
            }, 2000)
        })
    }

    const downloadCertificates = () => {
        getCertificates().then(result => {
            console.log('get certificates')
            setCertificates(result)
        })
    }

    useEffect(() => {
        downloadCertificates()
    }, [])

    return <Certificates certificates={certificates}/>
}

export default CertificatesContainer