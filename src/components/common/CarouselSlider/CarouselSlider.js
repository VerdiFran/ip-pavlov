import Arrow from '../Arrow/Arrow'
import {fadeInLeft, fadeInRight, fadeOutLeft, fadeOutRight} from 'react-animations'
import Radium, {StyleRoot} from 'radium'
import styles from './CarouselSlider.module.scss'
import {useEffect, useRef, useState} from 'react'

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
    },

    emergenceCarousel: {
        transition: 'grid-template-columns 1s',
        gridTemplateColumns: "4% 92% 4%",
    },

    emergenceSlide: {
        transition: '0.5s',
        transitionDelay: '1s',
        opacity: 1
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

    const carouselSlideRef = useRef(null)

    const [carouselGridStyle, setCarouselGridStyle] = useState(null)
    const [slideStyle, setSlideStyle] = useState(null)

    useEffect(() => {
        if (carouselSlideRef.current) {
            const options = {
                root: null,
                threshold: 1
            }

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setCarouselGridStyle(animation.emergenceCarousel)
                    setSlideStyle(animation.emergenceSlide)
                }
            }, options)

            observer.observe(carouselSlideRef.current)
        }
    }, [carouselSlideRef])

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
        if (props.setCurrent) {
            props.setCurrent(value)
        } else {
            setInnerCurrent(value)
        }
    }

    const handleGetCurrent = () => props.current ?? innerCurrent

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
            <div ref={carouselSlideRef} style={carouselGridStyle} className={styles.carousel}>
                <div className={styles.leftArrow}>
                    <Arrow onClick={() => handleClick(leftClickConfig)} type={'left'}/>
                </div>
                <div style={slideStyle} className={styles.slide}>
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
