import CarouselSlider from '../../common/CarouselSlider/CarouselSlider'
import styles from './SalesLeaders.module.scss'
import {useRef, useState, useEffect} from 'react'
import AnotherSalesLeadersContainer from './AnotherSalesLeaders/AnotherSalesLeadersContainer'

/**
 * Component with sales leaders.
 * @param props Properties.
 */
const SalesLeaders = (props) => {

    const containerWithSlider = useRef(null)
    const containerFallIcon = useRef(null)
    const anyCategoryIcon = useRef(null)
    const fallingIcon = useRef(null)

    const [fallingIconY, setFallingIconY] = useState(0)
    const [circleSize, setCircleSize] = useState('0px')
    const [categoryIconsVisibility, setCategoryIconsVisibility] = useState('hidden')
    const [fallingIconVisibility, setFallingIconVisibility] = useState('visible')
    const [currentLeader, setCurrentLeader] = useState(0)

    let inTranslation = false

    useEffect(() => {
        if (containerWithSlider.current) {

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

    if (props.images.length !== props.leaders.length || !props.leaders.length) {
        return <div/>
    }

    const firstImage = props.images.find(image => image.leaderId === props.leaders[0].id)
    const anotherLeaders = props.leaders.filter((element, idx) => idx !== currentLeader)

    return (<>
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
                        setCurrent={(value) => setCurrentLeader(value)}
                    >
                        {props.leaders.map((leader) => {
                                const image = props.images.find(image => image.leaderId === leader.id) || ''
                                return (
                                    <div className={styles.salesLeadersSlide}>
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
                    <AnotherSalesLeadersContainer leaders={anotherLeaders}/>
                </div>
            </div>
        </>
    )
}

export default SalesLeaders