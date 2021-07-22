import styles from './PromotionProduct.module.scss'

const PromotionProduct = ({productInfo, image, openProduct}) => {
    return (
        <div
            key={productInfo.id}
            className={styles.imageWrapper}
            onClick={openProduct}
        >
            <img
                src={image ? URL.createObjectURL(image) : null}
                alt=""
                className={styles.image}
            />
        </div>
    )
}

export default PromotionProduct