import Partners from './Partners'
import {useEffect, useState} from 'react'

const PartnersContainer = () => {
    const [partners, setPartners] = useState([])

    const downloadPartners = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {
                        id: 0,
                        name: 'Медведь Любимый',
                        description: 'Сотрудничесво с этой компанией ведется в течении 6 лет. Компания всегда имеет на складе необходимые продукты',
                        link: 'http://www.ml-best.com/',
                        image: {
                            id: 90,
                            url: 'https://smily.ru/upload/iblock/c75/c75b173a6a9ec0323f1bca24f72764a2.jpg'
                        }
                    },
                    {
                        id: 0,
                        name: 'Роллтон Роллтон Роллтон Роллтон Роллтон',
                        description: 'Радует лапшой с самого основания компании',
                        link: 'http://www.ml-best.com/',
                        image: {
                            id: 90,
                            url: 'https://smily.ru/upload/iblock/c75/c75b173a6a9ec0323f1bca24f72764a2.jpg'
                        }
                    },
                    {
                        id: 0,
                        name: 'Медведь Любимый Роллтон Роллтон Роллтон',
                        description: 'Сотрудничесво с этой компанией ведется в течении 6 лет. Компания всегда имеет на складе необходимые продукты Радует лапшой с самого основания компании Радует лапшой с самого основания компании Радует лапшой с самого основания компании Радует лапшой с самого основания компании Радует лапшой с самого основания компании',
                        link: 'http://www.ml-best.com/catalog/fruktovo-yagodnaya-konservatsiya/persiki-otbornye-polovinki-1500-ml/',
                        image: {
                            id: 90,
                            url: 'https://smily.ru/upload/iblock/c75/c75b173a6a9ec0323f1bca24f72764a2.jpg'
                        }
                    },
                    {
                        id: 0,
                        name: 'Медведь Любимый',
                        description: 'Сотрудничесво с этой компанией ведется в течении 6 лет. Компания всегда имеет на складе необходимые продукты',
                        link: 'http://www.ml-best.com/',
                        image: {
                            id: 90,
                            url: 'https://smily.ru/upload/iblock/c75/c75b173a6a9ec0323f1bca24f72764a2.jpg'
                        }
                    },
                    {
                        id: 0,
                        name: 'Медведь Любимый',
                        description: 'Сотрудничесво с этой компанией ведется в течении 6 лет. Компания всегда имеет на складе необходимые продукты',
                        link: 'http://www.ml-best.com/',
                        image: {
                            id: 90,
                            url: 'https://smily.ru/upload/iblock/c75/c75b173a6a9ec0323f1bca24f72764a2.jpg'
                        }
                    },
                ])
            }, 1500)
        })
    }

    useEffect(() => {
        downloadPartners().then(result => setPartners(result))
    }, [])

    return <Partners partners={partners}/>
}

export default PartnersContainer