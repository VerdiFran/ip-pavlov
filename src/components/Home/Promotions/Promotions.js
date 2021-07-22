import CarouselSlider from '../../common/CarouselSlider/CarouselSlider'
import styles from './Promotions.module.scss'
import {useState} from 'react'
import ProductInfoContainer from '../../ProductInfo/ProductInfoContainer'
import PromotionContainer from './Promotion/PromotionContainer'

/**
 * Component with sales leaders.
 */
const Promotions = ({promotions}) => {
    const [currentPromotion, setCurrentPromotion] = useState(0)

    const [productVisible, setProductVisible] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    return (
        <div>
            <h1 className={'heading'}>акции</h1>
            <div>
                <div className={styles.promotionsSliderContainer}>
                    <CarouselSlider
                        current={currentPromotion}
                        setCurrent={setCurrentPromotion}
                    >
                        {
                            promotions.map((promotion) => <PromotionContainer
                                promotionInfo={promotion}
                                openProduct={(productId) => {
                                    setSelectedProduct(promotion.relatedProducts.find(product => product.id === productId))
                                    setProductVisible(true)
                                }}
                            />)
                        }
                    </CarouselSlider>
                </div>
            </div>
            {
                (productVisible && selectedProduct) &&
                <ProductInfoContainer
                    product={selectedProduct}
                    productInfoVisible={productVisible}
                    onClose={() => {
                        setProductVisible(false)
                    }}
                />
            }
        </div>
    )
}

export default Promotions