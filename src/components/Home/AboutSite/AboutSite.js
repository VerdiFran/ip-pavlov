import React from 'react'
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
    return (
        <section>
            <div className={styles.infoText}>
                <h1>ОПТОВАЯ И РОЗНИЧНАЯ ПРОДАЖА ПРОДУКТОВ ПИТАНИЯ</h1>
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
                <div className={styles.distributorsProductsContainer}>
                    <img src={bearProduct} alt='' width="166px"/>
                    <img src={goldenSeedProduct} alt='' width="92px"/>
                    <img src={barkoProduct} alt='' width="134px"/>
                    <img src={idealProduct} alt='' width="84px"/>
                </div>
                <img src={box} alt='' width="400px" className={styles.box}/>
            </div>
        </section>
    )
}

export default AboutSite
