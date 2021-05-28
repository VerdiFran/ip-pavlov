import React from 'react'
import BlockWrapper from '../BlockWrapper/BlockWrapper'
import AboutSite from './AboutSite/AboutSite'
import PageWrapper from '../PageWrapper/PageWrapper'
import AboutCompany from './AboutCompany/AboutCompany'
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
            <BlockWrapper
                wrapperType="grey"
                style={{
                    position: 'relative',
                    boxSizing: 'border-box',
                    marginBottom: '3px',
                    overflowY: 'hidden',
                    boxShadow: 'inset 0 -4px 20px rgba(0, 0, 0, 0.15)'
                }}
            >
                <AboutSite/>
            </BlockWrapper>
            <PageWrapper>
                <BlockWrapper wrapperType="light" dividerType="short">
                    <SalesLeadersContainer/>
                </BlockWrapper>
                <BlockWrapper wrapperType="dark" dividerType="long">
                    <CatalogSectionContainer/>
                </BlockWrapper>
                <BlockWrapper wrapperType="light" dividerType="short">
                    <AboutCompany/>
                </BlockWrapper>
            </PageWrapper>
        </>
    )
}

export default Home
