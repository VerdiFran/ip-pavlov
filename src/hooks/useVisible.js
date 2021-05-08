import {useEffect, useRef, useState} from 'react'

/**
 * Hook that set visible and hide element if user clicked outside
 * @param initialIsVisible
 * @returns {{ref: React.MutableRefObject<null>, setIsVisible: (value: unknown) => void, isVisible: unknown}}
 */
const useVisible = (initialIsVisible) => {
    const [isVisible, setIsVisible] = useState(initialIsVisible)
    const ref = useRef(null)

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return {ref, isVisible, setIsVisible}
}

export default useVisible
