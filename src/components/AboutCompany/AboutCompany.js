import PageWrapper from '../PageWrapper/PageWrapper'
import BlockWrapper from '../BlockWrapper/BlockWrapper'
import CertificatesContainer from './Certificates/CertificatesContainer'
import AboutCompanySection from './AboutCompanySection/AboutCompanySection'

/**
 * Component with information about company.
 */
const AboutCompany = () => {
    return (
        <PageWrapper>
            <BlockWrapper wrapperType="light">
                <AboutCompanySection/>
            </BlockWrapper>
            <BlockWrapper wrapperType="dark" dividerType="long">
                <CertificatesContainer/>
            </BlockWrapper>
        </PageWrapper>
    )
}

export default AboutCompany