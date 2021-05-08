import React from 'react'
import BlockWrapper from '../BlockWrapper/BlockWrapper'
import AboutSite from './AboutSite/AboutSite'
import PageWrapper from '../PageWrapper/PageWrapper'

const Home = () => {
    return (
        <PageWrapper>
            <BlockWrapper wrapperType="grey">
                <AboutSite/>
            </BlockWrapper>
        </PageWrapper>
    )
}

export default Home
