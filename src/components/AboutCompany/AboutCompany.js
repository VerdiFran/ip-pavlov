import PageWrapper from '../PageWrapper/PageWrapper'
import Facts from './Facts/Facts'
import BlockWrapper from '../BlockWrapper/BlockWrapper'
import CertificatesContainer from './Certificates/CertificatesContainer'

/**
 * Component with information about company.
 */
const AboutCompany = () => {
    return (
        <PageWrapper>
            <BlockWrapper>
                <Facts/>
            </BlockWrapper>
            <BlockWrapper wrapperType="dark" dividerType="long">
                <CertificatesContainer/>
            </BlockWrapper>
        </PageWrapper>
    )
}

export default AboutCompany