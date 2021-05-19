import React from 'react'
import BlockWrapper from '../BlockWrapper/BlockWrapper'
import AboutSite from './AboutSite/AboutSite'
import PageWrapper from '../PageWrapper/PageWrapper'
import AboutCompany from './AboutCompany/AboutCompany'
import CatalogSectionContainer from './CatalogSection/CatalogSectionContainer'

/**
 * Home page
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () => {
    return (
        <PageWrapper>
            <BlockWrapper wrapperType="grey">
                <AboutSite/>
            </BlockWrapper>
            <BlockWrapper wrapperType="dark" dividerType="long">
                <CatalogSectionContainer/>
            </BlockWrapper>
            <BlockWrapper wrapperType="light" dividerType="short">
                <AboutCompany/>
            </BlockWrapper>
        </PageWrapper>
    )
}

export default Home
