import PartnersContainer from './Partners/PartnersContainer'
import PageWrapper from '../PageWrapper/PageWrapper'
import BlockWrapper from '../BlockWrapper/BlockWrapper'

/**
 * Partners page
 * @returns {JSX.Element}
 * @constructor
 */
const PartnersPage = () => {
    return (
        <PageWrapper>
            <BlockWrapper>
                <PartnersContainer/>
            </BlockWrapper>
        </PageWrapper>
    )
}

export default PartnersPage