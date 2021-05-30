import CarouselSlider from '../../common/CarouselSlider/CarouselSlider'
import styles from './SalesLeaders.module.scss'
import {useState, useEffect} from 'react'
import ProductInfo from '../../ProductInfo/ProductInfo'
import AnotherSalesLeaders from './AnotherSalesLeaders/AnotherSalesLeaders'

/**
 * Component with sales leaders.
 */
const SalesLeaders = ({leaders, categoryImages, productImages}) => {

    const [currentLeader, setCurrentLeader] = useState(0)

    const [productVisible, setProductVisible] = useState(false)
    const [selectedLeaderId, setSelectedLeaderId] = useState(0)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [selectedProductImage, setSelectedProductImage] = useState(null)


    useEffect(() => {
        if (!selectedLeaderId) {
            return
        }

        setSelectedProduct(leaders?.find(leader => leader.id === selectedLeaderId)?.product)
        setSelectedProductImage(productImages?.find(image => image.leaderId === selectedLeaderId)?.image)
    }, [selectedLeaderId])

    const anotherLeaders = leaders.filter((element, idx) => idx !== currentLeader)

    return (
        <div>
            <h1 className={"heading"}>лидеры продаж</h1>
            <div>
                <div className={styles.salesLeadersSliderContainer}>
                    <CarouselSlider
                        current={currentLeader}
                        setCurrent={setCurrentLeader}
                    >
                        {leaders.map((leader) => {
                                const image = categoryImages.find(image => image.leaderId === leader.id) || ''
                                return (
                                    <div
                                        className={styles.salesLeadersSlide}
                                        onClick={() => {
                                            setProductVisible(true)
                                            setSelectedLeaderId(leader.id)
                                        }}
                                    >
                                        <div className={styles.salesLeaderInfo}>
                                            <div className={styles.salesLeaderDescription}>
                                                {leader.product.description}
                                            </div>
                                            <div className={styles.salesLeaderProducer}>
                                                Производитель: {leader.product.producer.name}
                                            </div>
                                        </div>
                                        <div className={styles.circle}/>
                                        <img
                                            className={styles.salesLeaderCategoryIcon}
                                            src={image ? URL.createObjectURL(image.image) : ''}
                                            alt={'category'}
                                        />
                                    </div>
                                )
                            }
                        )}
                    </CarouselSlider>
                </div>
                <div className={styles.anotherSalesLeaders}>
                    <AnotherSalesLeaders
                        leaders={anotherLeaders}
                        onSelect={(id) => {
                            setSelectedLeaderId(id)
                            setProductVisible(true)
                        }}
                    />
                </div>
            </div>
            {productVisible && <ProductInfo
                product={selectedProduct}
                productImage={selectedProductImage}
                productInfoVisible={productVisible}
                onClose={() => {
                    setProductVisible(false)
                }}
            />}
        </div>
    )
}

export default SalesLeaders