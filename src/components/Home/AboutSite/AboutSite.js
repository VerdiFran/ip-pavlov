import React, {useState} from 'react'
import ideal from '../../../assets/images/distributors/ideal.png'
import goldenSeed from '../../../assets/images/distributors/golden_seed.png'
import bear from '../../../assets/images/distributors/bear.svg'
import barko from '../../../assets/images/distributors/barko.jpg'
import box from '../../../assets/images/distributorsProducts/box.png'
import bearProduct from '../../../assets/images/distributorsProducts/bearProduct.png'
import barkoProduct from '../../../assets/images/distributorsProducts/barkoProduct.png'
import goldenSeedProduct from '../../../assets/images/distributorsProducts/goldenSeedProduct.png'
import idealProduct from '../../../assets/images/distributorsProducts/idealProduct.jpg'
import styles from './AboutSite.module.scss'

/**
 * Component with information about site
 * @returns {JSX.Element}
 * @constructor
 */
const AboutSite = () => {
    const [scrolledHeight, setScrolledHeight] = useState(-30)
    const [scrolledWidth, setScrolledWidth] = useState(-30)

    const handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 600 - 30
        setScrolledHeight(() => scrolled > 0 ? 0 : scrolled)
        setScrolledWidth(() => scrolled > 0 ? 0 : scrolled)
    }

    window.addEventListener('scroll', handleScroll)

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
                <h1 className={styles.heading}>ОПТОВАЯ И РОЗНИЧНАЯ ПРОДАЖА ПРОДУКТОВ ПИТАНИЯ</h1>
                <p>
                    В нашем магазине вы можете заказать продукты питания оптом и в розницу.
                </p>
                <p>
                    Просто посмотрите товары
                    <a href={'/catalog'} className={styles.catalogButton}>в каталоге</a>,
                </p>
                <p>
                    позвоните по номеру 8 (800) 255-25-65 и ждите ваш заказ!
                </p>
            </div>
            <div className={styles.distributorsContainer}>
                <img src={ideal} alt='Ideal' width="137px"/>
                <img src={goldenSeed} alt='Золотая Семечка' width="116px"/>
                <img src={bear} alt='Медведь Любимый' width="156px"/>
                <img src={barko} alt='Барко' width="140px"/>
            </div>
            <div className={styles.productsInBox}>
                <div className={styles.productsContainer}>
                    <img src={bearProduct} alt='' width="166px" className={styles.product} style={product1Style}/>
                    <img src={goldenSeedProduct} alt='' width="92px" className={styles.product} style={product2Style}/>
                    <img src={barkoProduct} alt='' width="134px" className={styles.product} style={product3Style}/>
                    <img src={idealProduct} alt='' width="84px" className={styles.product} style={product4Style}/>
                </div>
                <img src={box} alt='' width="400px" className={styles.box} style={boxStyle}/>
            </div>
        </section>
    )
}

export default AboutSite
