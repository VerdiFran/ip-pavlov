import React, {useEffect} from 'react'
import BlockWrapper from '../BlockWrapper/BlockWrapper'
import AboutSite from './AboutSite/AboutSite'
import PageWrapper from '../PageWrapper/PageWrapper'
import CatalogSectionContainer from './CatalogSection/CatalogSectionContainer'
import PromotionsContainer from './Promotions/PromotionsContainer'

/**
 * Home page
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () => {
    useEffect(() => {
        document.title = 'Главная · ИП Павлов'
    }, [])

    return (
        <>
            <AboutSite/>
            <PageWrapper>
                <BlockWrapper wrapperType="light" dividerType="short">
                    <PromotionsContainer/>
                </BlockWrapper>
                <BlockWrapper wrapperType="dark" dividerType="long">
                    <CatalogSectionContainer/>
                </BlockWrapper>
            </PageWrapper>
        </>
    )
}

export default Home
