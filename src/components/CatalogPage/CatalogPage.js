import React from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import CatalogHeaderContainer from './CatalogHeader/CatalogHeaderContainer'

/**
 * Page with catalog
 * @returns {JSX.Element}
 * @constructor
 */
const CatalogPage = () => {
    return (
        <PageWrapper>
            <CatalogHeaderContainer/>
        </PageWrapper>
    )
}

export default CatalogPage
