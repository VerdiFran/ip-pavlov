import PageWrapper from '../PageWrapper/PageWrapper'
import Facts from './Facts/Facts'
import BlockWrapper from '../BlockWrapper/BlockWrapper'

/**
 * Component with information about company.
 */
const AboutCompany = () => {
    return (
        <PageWrapper>
            <BlockWrapper>
                <Facts/>
            </BlockWrapper>
        </PageWrapper>
    )
}

export default AboutCompany