import React from 'react'
import CatalogHeader from './CatalogHeader'

const CatalogHeaderContainer = () => {
    const manufacturers = [
        {
            id: 0,
            name: 'Барко'
        },
        {
            id: 1,
            name: 'Ideal'
        },
        {
            id: 2,
            name: 'Медведь Любимый'
        }
    ]

    return <CatalogHeader
        manufacturers={manufacturers}
    />
}

export default CatalogHeaderContainer