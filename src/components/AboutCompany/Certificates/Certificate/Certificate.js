import styles from './Certificate.module.scss'
import useVisible from '../../../../hooks/useVisible'
import {useEffect} from 'react'
import Preloader from '../../../common/Preloader/Preloader'

/**
 * Certificate
 * @param certificate Information about certificate
 * @param image Certificate image
 * @returns {JSX.Element}
 */
const Certificate = ({certificate, images, loading, downloadNormalSizeImage}) => {
    const {ref, isVisible, setIsVisible} = useVisible(false, 'click')

    useEffect(() => {
        if (!images?.normal && isVisible) {
            downloadNormalSizeImage()
        }
    }, [isVisible])

    return (
        <>
            <div key={certificate.id} className={styles.certificateContainer}>
                <div className={styles.imageWrapper}>
                    <img
                        src={images?.mini ? URL.createObjectURL(images?.mini) : ''}
                        alt=""
                        className={styles.certificateImage}
                        onClick={() => setIsVisible(true)}
                    />
                </div>
            </div>
            {
                isVisible && <div className={styles.openedCertificateBackground}>
                    <div className={styles.openedCertificateWrapper}>
                        {
                            loading && <Preloader/>
                        }
                        <img
                            ref={ref}
                            src={images?.normal ? URL.createObjectURL(images?.normal) : ''}
                            alt=""
                            className={styles.openedCertificate}
                        />
                    </div>
                </div>
            }
        </>
    )
}

export default Certificate
