import React from 'react'
import BlockWrapper from '../BlockWrapper/BlockWrapper'
import AboutSite from './AboutSite/AboutSite'
import PageWrapper from '../PageWrapper/PageWrapper'
import CatalogSectionContainer from './CatalogSection/CatalogSectionContainer'
import SalesLeadersContainer from './SalesLeaders/SalesLeadersContainer'

/**
 * Home page
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () => {
    return (
        <>
            <AboutSite/>
            <PageWrapper>
                <BlockWrapper wrapperType="light" dividerType="short">
                    <SalesLeadersContainer/>
                </BlockWrapper>
                <BlockWrapper wrapperType="dark" dividerType="long">
                    <CatalogSectionContainer/>
                </BlockWrapper>
            </PageWrapper>
        </>
    )
}

export default Home
