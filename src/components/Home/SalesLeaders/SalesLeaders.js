import CarouselSlider from '../../common/CarouselSlider/CarouselSlider'
import styles from './SalesLeaders.module.scss'
import {useRef, useState, useEffect} from 'react'
import ProductInfo from '../../ProductInfo/ProductInfo'
import AnotherSalesLeaders from './AnotherSalesLeaders/AnotherSalesLeaders'

/**
 * Component with sales leaders.
 */
const SalesLeaders = ({leaders, categoryImages, productImages}) => {

    const containerWithSlider = useRef(null)
    const containerFallIcon = useRef(null)
    const anyCategoryIcon = useRef(null)
    const fallingIcon = useRef(null)

    const [fallingIconY, setFallingIconY] = useState(0)
    const [circleSize, setCircleSize] = useState('0px')
    const [categoryIconsVisibility, setCategoryIconsVisibility] = useState('hidden')
    const [fallingIconVisibility, setFallingIconVisibility] = useState('visible')
    const [currentLeader, setCurrentLeader] = useState(0)

    const [productVisible, setProductVisible] = useState(false)
    const [selectedLeaderId, setSelectedLeaderId] = useState(0)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [selectedProductImage, setSelectedProductImage] = useState(null)

    let inTranslation = false

    useEffect(() => {
        if (containerWithSlider.current && anyCategoryIcon.current) {

            const options = {
                root: null,
                threshold: 1
            }

            const observer = new IntersectionObserver((entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !inTranslation && fallingIconY === 0) {
                        const rect = anyCategoryIcon.current.getBoundingClientRect()
                        const imgRect = fallingIcon.current.getBoundingClientRect()
                        setFallingIconY(rect.top - imgRect.top)
                        setCircleSize('250px')
                        setFallingIconVisibility('hidden')
                        setTimeout(() => {
                            setCategoryIconsVisibility('visible')
                        }, 400)
                        inTranslation = true
                    }

                })
            }), options)

            observer.observe(containerWithSlider.current)
        }
    })

    useEffect(() => {
        if (!selectedLeaderId) {
            return
        }

        setSelectedProduct(leaders?.find(leader => leader.id === selectedLeaderId)?.product)
        setSelectedProductImage(productImages?.find(image => image.leaderId === selectedLeaderId)?.image)
    }, [selectedLeaderId])

    const firstImage = categoryImages.find(image => image.leaderId === leaders[0].id)
    const anotherLeaders = leaders.filter((element, idx) => idx !== currentLeader)

    return (
        <div>
            <h1 className={"heading"}>лидеры продаж</h1>
            <div>
                <div ref={containerFallIcon} className={styles.dropIconContainer}>
                    <div className={styles.dropIconGrid}>
                        <img
                            ref={fallingIcon}
                            style={{top: fallingIconY, visibility: fallingIconVisibility}}
                            className={styles.dropIcon}
                            src={firstImage ? URL.createObjectURL(firstImage.image) : ''}
                            alt={'drop'}
                        />
                    </div>
                </div>
                <div className={styles.salesLeadersSliderContainer} ref={containerWithSlider}>
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
                                        <div style={{width: circleSize, height: circleSize}} className={styles.circle}/>
                                        <img
                                            style={{visibility: categoryIconsVisibility}}
                                            ref={(image) => {
                                                if (!anyCategoryIcon.current && image) {
                                                    anyCategoryIcon.current = image
                                                }
                                            }}
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