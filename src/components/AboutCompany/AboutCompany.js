import PageWrapper from '../PageWrapper/PageWrapper'
import BlockWrapper from '../BlockWrapper/BlockWrapper'
import PartnersContainer from './Partners/PartnersContainer'

/**
 * Component with information about company.
 */
const AboutCompany = () => {
    return (
        <PageWrapper>
            <BlockWrapper dividerType="long">
                <PartnersContainer/>
            </BlockWrapper>
        </PageWrapper>
    )
}

export default AboutCompany