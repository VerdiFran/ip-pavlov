import React, {useEffect, useRef, useState} from 'react'
import ideal from '../../../assets/images/distributors/ideal.png'
import box from '../../../assets/images/distributorsProducts/box.png'
import bearProduct from '../../../assets/images/distributorsProducts/bearProduct.png'
import barkoProduct from '../../../assets/images/distributorsProducts/barkoProduct.png'
import goldenSeedProduct from '../../../assets/images/distributorsProducts/goldenSeedProduct.png'
import idealProduct from '../../../assets/images/distributorsProducts/idealProduct.jpg'
import styles from './AboutSite.module.scss'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import {NavLink} from 'react-router-dom'
import {TO_CATALOG} from '../../../routes'

/**
 * Component with information about site
 */
const AboutSite = () => {
    function importAll(r) {
        return r.keys().map(r);
    }

    const distributors = importAll(require.context('../../../assets/images/distributors', false, /\.(png|jpe?g|svg)$/))

    console.log(ideal, distributors)

    const {width} = useWindowDimensions()
    const [boxVisible, setBoxVisible] = useState()

    useEffect(() => {
        setBoxVisible(() => width >= 1000)
    }, [width])

    const [scrolledHeight, setScrolledHeight] = useState(-30)
    const [scrolledWidth, setScrolledWidth] = useState(-30)

    const handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 600 - 30

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

    const product1Style = {
        transform: `translate(${scrolledWidth}%, ${scrolledHeight}%) rotate(-18deg)`
    }

    const product2Style = {
        transform: `translate(${scrolledWidth}%, ${scrolledHeight}%) rotate(-6deg)`
    }

    const product3Style = {
        transform: `translate(${-scrolledWidth / 3}%, ${scrolledHeight}%) rotate(6deg)`
    }

    const product4Style = {
        transform: `translate(${-scrolledWidth}%, ${scrolledHeight}%) rotate(20deg)`
    }

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
                    distributors.map(distributor => <img src={distributor.default} alt=''/>)
                }
            </div>
            {
                boxVisible
                && <div className={styles.productsInBox}>
                    <div className={styles.productsContainer}>
                        <img src={bearProduct} alt='' width="166px" className={styles.product} style={product1Style}/>
                        <img src={goldenSeedProduct} alt='' width="92px" className={styles.product} style={product2Style}/>
                        <img src={barkoProduct} alt='' width="134px" className={styles.product} style={product3Style}/>
                        <img src={idealProduct} alt='' width="84px" className={styles.product} style={product4Style}/>
                    </div>
                    <img src={box} alt='' width="400px" className={styles.box} style={boxStyle}/>
                </div>
            }
        </section>
    )
}

export default AboutSite
