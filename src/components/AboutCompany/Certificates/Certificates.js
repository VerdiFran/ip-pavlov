import CertificateContainer from './Certificate/CertificateContainer'
import styles from './Certificates.module.scss'
import CarouselSlider from '../../common/CarouselSlider/CarouselSlider'
import {IdGenerator} from '../../../utils/generators/generators'
import {useEffect, useState} from 'react'
import useWindowDimensions from '../../../hooks/useWindowDimensions'

/**
 * List of certificates
 * @param certificates Array of certificates
 * @returns {JSX.Element}
 * @constructor
 */
const Certificates = ({certificates}) => {
    const {width} = useWindowDimensions()

    const getMaxCertificateNumber = (windowWidth) => {
        if (windowWidth <= 600) {
            return 1
        } else if (windowWidth <= 800) {
            return 2
        } else if (windowWidth <= 1500) {
            return 3
        } else if (windowWidth <= 1800) {
            return 4
        } else return 5
    }

    const [maxCertificateNumber, setMaxCertificateNumber] = useState(getMaxCertificateNumber(width))

    useEffect(() => {
        setMaxCertificateNumber(getMaxCertificateNumber(width))
    }, [width])

    const certificateGroups = certificates?.length > 0 && certificates.reduce((groups, certificate) => {
        const lastGroup = groups[groups.length - 1] ?? null

        if (lastGroup?.length < maxCertificateNumber) {
            lastGroup.push(certificate)
            return groups
        } else {
            return [...groups, [certificate]]
        }
    }, [])

    const groupIdIterator = IdGenerator()

    const certificatesGroupContainers = certificateGroups?.length > 0 &&
        certificateGroups.map((group) =>
            <div id={groupIdIterator.next().value} className={styles.certificatesContainer}>
                {
                    group.map((certificate) => <CertificateContainer certificate={certificate}/>)
                }
            </div>
        )

    return (
        <div>
            <h1 className="heading">
                Сертификаты
            </h1>
            {
                certificatesGroupContainers?.length &&
                <CarouselSlider>{certificatesGroupContainers}</CarouselSlider>
            }
        </div>
    )
}

export default Certificates
