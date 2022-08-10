import React, { useEffect, useState } from 'react'
import box from '../../../assets/images/box.png'
import styles from './AboutSite.module.scss'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import {getPartners} from '../../../utils/selectors/catalogSelectors'
import { NavLink, useHistory } from 'react-router-dom'
import { TO_CATALOG } from '../../../routes'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    producers: getPartners(state)
})

/**
 * Component with information about site
 */
const AboutSite = (props) => {
    function importAll(r) {
        return r.keys().map(r)
    }

    const distributors = importAll(require.context('../../../assets/images/distributors', false, /\.(png|jpe?g|svg)$/))
    const distributorsProducts = importAll(require.context('../../../assets/images/distributorsProducts', false, /\.(png|jpe?g|svg)$/))
    const imageNamesToDistributorNames = {
        'agro_master': 'Агромастер',
        'barko': 'Барко',
        'bear': 'Медведь любимый',
        'domat': 'Домат',
        'golden_seed': 'Золотая семечка',
        'ideal': 'Бунге',
        'tovarnoe_hozaystvo': 'Товарное хозяйство'
    }

    const { width } = useWindowDimensions()
    const [boxVisible, setBoxVisible] = useState()

    const history = useHistory()

    useEffect(() => {
        setBoxVisible(() => width >= 1000)
    }, [width])

    const [scrolledHeight, setScrolledHeight] = useState(-30)
    const [scrolledWidth, setScrolledWidth] = useState(-30)

    const handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 200 - 30

        setScrolledHeight(() => scrolled > 0 ? 0 : scrolled)
        setScrolledWidth(() => scrolled > 0 ? 0 : scrolled)
    }

    useEffect(() => {
        if (boxVisible) {
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, [boxVisible])

    const boxStyle = {
        transform: `translateY(${-scrolledHeight}%)`,
        transitionDuration: '0.3s'
    }

    const productsStyles = [
        {
            transform: `translate(${scrolledWidth / 0.3}%, ${scrolledHeight / 0.5}%) rotate(${scrolledHeight / 5 - 25}deg)`
        },
        {
            transform: `translate(${scrolledWidth / 0.6}%, ${scrolledHeight / 0.8}%) rotate(${scrolledHeight / 5 - 15}deg)`
        },
        {
            transform: `translate(${scrolledWidth / 0.5}%, ${scrolledHeight / 0.5}%) rotate(${scrolledHeight / 2}deg)`
        },
        {
            transform: `translate(${-scrolledWidth}%, ${scrolledHeight / 0.6}%) rotate(${scrolledHeight / -5 + 5}deg)`
        },
        {
            transform: `translate(${-scrolledWidth / 0.8}%, ${scrolledHeight - 20}%) rotate(${scrolledHeight / -5 + 20}deg)`
        },
        {
            transform: `translate(${-scrolledWidth / 0.5}%, ${scrolledHeight / 0.8}%) rotate(${scrolledHeight / -5 + 25}deg)`
        }
    ]

    return (
        <section className={styles.aboutSiteSection}>
            <div className={styles.infoText}>
                <h1 className={styles.heading}>
                    Дистрибьютерская оптово-розничная логистическая компания
                </h1>
                <p>
                    В нашей организации вы можете заказать продукты питания оптом и в розницу.
                </p>
                <p>
                    Просто посмотрите товары
                    <NavLink
                        to={TO_CATALOG}
                        className={styles.catalogButton}
                    >в&nbsp;каталоге</NavLink>,
                </p>
                <p>
                    позвоните по номеру 8 (391) 240-12-22 и ждите ваш заказ!
                </p>
            </div>
            <div className={styles.distributorsContainer}>
                {
                    distributors.map(distributor => { 
                    const imageName = distributor.default.split('/').pop().split('.')[0]
                    const distributorName = imageNamesToDistributorNames[imageName]
                    if (!distributorName || !props.producers) {
                        return <></>
                    }

                    const producer = props.producers.find(producer => producer.name === distributorName)
                    if (!producer) {
                        return <></>
                    }

                    return <img 
                        src={distributor.default} 
                        alt=''
                        className={styles.distributorImage}
                        onClick={() => {
                            history.push(`/catalog?producerId=${producer.id}`)
                        }}
                        />
                    })
                }
            </div>
            {
                boxVisible
                && <div className={styles.productsInBox}>
                    <div className={styles.productsContainer}>
                        {
                            distributorsProducts.map((product, index) =>
                                <img
                                    src={product.default}
                                    alt=''
                                    className={styles.product}
                                    style={productsStyles[index]}
                                />
                            )
                        }
                    </div>
                    <img src={box} alt='' className={styles.box} style={boxStyle} />
                </div>
            }
        </section>
    )
}

export default connect(mapStateToProps)(AboutSite)
