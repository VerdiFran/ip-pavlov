import Arrow from './Arrow/Arrow'
import {fadeInLeft, fadeInRight, fadeOutLeft, fadeOutRight} from 'react-animations'
import Radium, {StyleRoot} from 'radium'
import styles from './CarouselSlider.module.scss'
import {useState} from 'react'

const animationDuration = 0.5
const duration = `x ${animationDuration}s`

const animation = {

    fadeInLeft: {
        animation: duration,
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft'),
    },

    fadeOutLeft: {
        animation: duration,
        animationName: Radium.keyframes(fadeOutLeft, 'fadeOutLeft'),
    },

    fadeInRight: {
        animation: duration,
        animationName: Radium.keyframes(fadeInRight, 'fadeInRight'),
    },

    fadeOutRight: {
        animation: duration,
        animationName: Radium.keyframes(fadeOutRight, 'fadeOutRight'),
    }
}


/**
 * Our custom carrousel slider.
 * @param props Properties
 */
const CarouselSlider = (props) => {
    const [previous, setPrevious] = useState(0)
    const [currentAnimation, setCurrentAnimation] = useState(null)
    const [previousAnimation, setPreviousAnimation] = useState(null)
    const [animationStarted, setAnimationStarted] = useState(false)
    const [innerCurrent, setInnerCurrent] = useState(0)

    const leftClickConfig = {
        previousAnimation: animation.fadeOutRight,
        currentAnimation: animation.fadeInLeft,
        nextSlide: (currentSlide) =>
            currentSlide === props.children.length - 1 ? 0 : currentSlide + 1
    }

    const rightClickConfig = {
        previousAnimation: animation.fadeOutLeft,
        currentAnimation: animation.fadeInRight,
        nextSlide: (currentSlide) =>
            currentSlide === 0 ? props.children.length - 1 : currentSlide - 1
    }

    const handleSetCurrent = (value) => {
        if (props.current) {
            props.setCurrent(value)
        } else {
            setInnerCurrent(value)
        }
    }

    const handleGetCurrent = () => props.current || innerCurrent

    const handleClick = (config) => {

        if (animationStarted) {
            return
        }

        setPrevious(handleGetCurrent())
        setPreviousAnimation(config.previousAnimation)
        handleSetCurrent(config.nextSlide(handleGetCurrent()))
        setCurrentAnimation(config.currentAnimation)
        setAnimationStarted(true)
        setTimeout(() => {
            setAnimationStarted(false)
            setCurrentAnimation(null)
            setPreviousAnimation(null)
        }, animationDuration * 1000)
    }

    return (
        <StyleRoot>
            <div className={styles.carousel}>
                <div className={styles.leftArrow}>
                    <Arrow onClick={() => handleClick(leftClickConfig)} type={'left'}/>
                </div>
                <div className={styles.slide}>
                    <div className={styles.item} style={currentAnimation}>
                        {props.children[handleGetCurrent()]}
                    </div>
                    {animationStarted &&
                    (
                        <div className={styles.item} style={previousAnimation}>
                            {props.children[previous]}
                        </div>
                    )}
                </div>
                <div className={styles.rightArrow}>
                    <Arrow onClick={() => handleClick(rightClickConfig)} type={'right'}/>
                </div>
            </div>
        </StyleRoot>
    )
}

export default CarouselSlider
