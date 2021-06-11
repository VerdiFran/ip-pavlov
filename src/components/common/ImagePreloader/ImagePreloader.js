import styles from './ImagePreloader.module.scss'
import Radium, {StyleRoot} from 'radium'
import {useEffect, useState} from 'react'

/**
 * Preloader for category image.
 * @param loaded Image is loaded.
 * @param preloaderContainer Block that contains this preloader.
 * @param preloaderTitle Text that will be show before load.
 */
const ImagePreloader = ({loaded, preloaderContainer, preloaderTitle}) => {
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
    const [preloaderTitleVisibility, setPreloaderTitleVisibility] = useState('visible')

    const preloaderTitleStyle = {
        visibility: preloaderTitleVisibility
    }

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
            setPreloaderTitleVisibility('hidden')
        }
    }, [loaded])

    return <>
        <StyleRoot style={preloaderStyle} className={[styles.ring, styles.innerRing].join(' ')}/>
        <span className={styles.preloaderTitle} style={preloaderTitleStyle}>{preloaderTitle}</span>
    </>
}

export default ImagePreloader