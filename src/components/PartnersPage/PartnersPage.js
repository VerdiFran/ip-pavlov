import PartnersContainer from './Partners/PartnersContainer'
import PageWrapper from '../PageWrapper/PageWrapper'
import BlockWrapper from '../BlockWrapper/BlockWrapper'
import {useEffect} from 'react'

/**
 * Partners page
 * @returns {JSX.Element}
 * @constructor
 */
const PartnersPage = () => {
    useEffect(() => {
        document.title = 'Партнеры · ИП Павлов'
    }, [])

    return (
        <PageWrapper>
            <BlockWrapper>
                <PartnersContainer/>
            </BlockWrapper>
        </PageWrapper>
    )
}

export default PartnersPage