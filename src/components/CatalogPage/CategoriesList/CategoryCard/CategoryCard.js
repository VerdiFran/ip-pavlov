import React, {useRef, useState} from 'react'
import {NavLink} from 'react-router-dom'
import styles from './CategoryCard.module.scss'
import ImagePreloader from '../../../common/ImagePreloader/ImagePreloader'
import Radium, {StyleRoot} from 'radium'

/**
 * Category of products in catalog
 * @param title Name of category
 * @param path Path to product of this category
 * @param image Image of category
 */
const CategoryCard = ({categoryInfo: {title, path, image}}) => {
    const [loaded, setLoaded] = useState(false)
    const preloaderContainer = useRef()

    const fontSizes = {
        24: '14px',
        36: '12px',
        50: '10px'
    }

    const fontAnimation = {
        animation: 'x 0.5s linear forwards',
        animationName: Radium.keyframes({
            'from': {
                bottom: 50
            },
            'to': {
                bottom: 0
            }
        })
    }

    const len = title.length
    const fontSize = len < 24
        ? '16px' : len > 50
            ? fontSizes[50] : len > 36
                ? fontSizes[36] : fontSizes[24]

    const [fontStyle, setFontStyle] = useState({fontSize})

    return (
        <div ref={preloaderContainer}>
            <NavLink to={path} className={styles.navLink}>
                <ImagePreloader loaded={loaded} preloaderContainer={preloaderContainer.current}/>
                <StyleRoot className={styles.categoryCard}>
                    <div className={styles.categoryImageContainer}>
                        <img
                            src={image ? URL.createObjectURL(image) : ''}
                            alt=""
                            className={styles.categoryImage}
                            onLoad={() => {
                                if (!loaded) {
                                    setLoaded(true)
                                    setFontStyle(prev => ({
                                        ...prev,
                                        ...fontAnimation
                                    }))
                                }
                            }}
                        />
                    </div>
                    <div
                        className={styles.categoryName}
                        style={fontStyle}
                    >{title}</div>
                </StyleRoot>
            </NavLink>
        </div>
    )
}

export default CategoryCard
