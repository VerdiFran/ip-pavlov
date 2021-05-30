import PageWrapper from '../PageWrapper/PageWrapper'
import BlockWrapper from '../BlockWrapper/BlockWrapper'
import React from 'react'
import HowToFindUs from './HowToFindUs/HowToFindUs'
import OurContacts from './OurContacts/OurContacts'
import RepresentativesContainer from './Representatives/RepresentativesContainer'

/**
 * Component with page that contains company contacts.
 */
const Contacts = () => {
    return (
        <PageWrapper>
            <BlockWrapper>
                <OurContacts/>
            </BlockWrapper>
            <BlockWrapper dividerType={'long'}>
                <RepresentativesContainer/>
            </BlockWrapper>
            <BlockWrapper dividerType={'short'}>
                <HowToFindUs/>
            </BlockWrapper>
        </PageWrapper>
    )
}

export default Contacts