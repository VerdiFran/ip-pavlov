import styles from './CategoryPreloader.module.scss'
import Radium, {StyleRoot} from 'radium'
import {useEffect, useState} from 'react'

/**
 * Preloader for category image.
 * @param loaded Image is loaded.
 */
const CategoryPreloader = ({loaded}) => {
    const animation = {
        animation: 'x 2s forwards',
        animationName: Radium.keyframes({
            'from': {
                width: 0,
                height: 0
            },
            'to': {
                width: '200%',
                height: '200%'
            }
        }, 'boxSizeAnimation')
    }

    const [preloaderStyle, setPreloaderStyle] = useState(null)

    useEffect(() => {
        if (loaded) {
            setPreloaderStyle(animation)
        }
    }, [loaded])

    return <StyleRoot style={preloaderStyle} className={[styles.ring, styles.innerRing].join(' ')}/>
}

export default CategoryPreloader