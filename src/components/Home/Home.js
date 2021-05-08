import React from 'react'
import AboutCompany from './AboutCompany/AboutCompany'
import PageWrapper from '../PageWrapper/PageWrapper'

/**
 * Home page
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () => {
    return (
        <PageWrapper>
            <AboutCompany/>
        </PageWrapper>
    )
}

export default Home
