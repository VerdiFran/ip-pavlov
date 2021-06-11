import styles from './ImagePreloader.module.scss'
import Radium, {StyleRoot} from 'radium'
import {useEffect, useState} from 'react'

/**
 * Preloader for category image.
 * @param loaded Image is loaded.
 * @param preloaderContainer Block that contains this preloader.
 */
const ImagePreloader = ({loaded, preloaderContainer}) => {
    const animation = {
        animation: 'x 2s forwards',
        animationName: Radium.keyframes({
            'from': {
                width: 0,
                height: 0,
            },
            'to': {
                width: '70%',
                height: '70%'
            }
        }, 'boxSizeAnimation')
    }

    const [preloaderStyle, setPreloaderStyle] = useState()
    const [preloaderSize, setPreloaderSize] = useState(500)

    useEffect(() => {
        if (preloaderContainer) {
            const width = preloaderContainer.offsetWidth
            const height = preloaderContainer.offsetHeight
            setPreloaderSize(width > height ? width : height)
        }
    }, [preloaderContainer])

    useEffect(() => {
        if (preloaderSize !== 0) {
            setPreloaderStyle({
                border: `${preloaderSize}px solid white`
            })
        }
    }, [preloaderSize])

    useEffect(() => {
        if (loaded) {
            setPreloaderStyle(prev => ({...prev, ...animation}))
        }
    }, [loaded])

    return <StyleRoot style={preloaderStyle} className={[styles.ring, styles.innerRing].join(' ')}/>
}

export default ImagePreloader