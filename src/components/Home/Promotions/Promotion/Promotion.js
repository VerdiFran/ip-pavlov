import PromotionProductContainer from './PromotionProduct/PromotionProductContainer'
import styles from './Promotion.module.scss'

const Promotion = ({promotionInfo, openProduct}) => {
    return (
        <div
            key={promotionInfo.id}
            className={styles.promotion}
        >
            <div className={styles.text}>
                {promotionInfo.text}
            </div>
            <div className={styles.relatedProducts}>
                {
                    promotionInfo.relatedProducts.map(product => <PromotionProductContainer
                        productInfo={product}
                        openProduct={openProduct}
                    />)
                }
            </div>
        </div>
    )
}


export default Promotion