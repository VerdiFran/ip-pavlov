import React, {useEffect} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import BlockWrapper from '../BlockWrapper/BlockWrapper'
import AboutSite from './AboutSite/AboutSite'
import PageWrapper from '../PageWrapper/PageWrapper'
import CatalogSectionContainer from './CatalogSection/CatalogSectionContainer'
import PromotionsContainer from './Promotions/PromotionsContainer'
import {getPromotions} from '../../utils/selectors/PromotionsSelectors'

const mapStateToProps = (state) => ({
    promotions: getPromotions(state)
})

/**
 * Home page
 * @returns {JSX.Element}
 * @constructor
 */
const Home = ({promotions}) => {
    useEffect(() => {
        document.title = 'Главная · ИП Павлов'
    }, [])

    return (
        <>
            <AboutSite/>
            <PageWrapper>
                {!!promotions.lenght && (
                    <BlockWrapper wrapperType="light" dividerType="short">
                    <PromotionsContainer/>
                </BlockWrapper>
                )}
                <BlockWrapper wrapperType="dark" dividerType="long">
                    <CatalogSectionContainer/>
                </BlockWrapper>
            </PageWrapper>
        </>
    )
}

export default compose(connect(mapStateToProps))(Home)
