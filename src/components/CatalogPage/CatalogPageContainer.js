import React, {useEffect, useState} from 'react'
import CatalogPage from './CatalogPage'
import catalogAPI from '../../api/catalogApi'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

/**
 * Container for catalog page.
 */
const CatalogPageContainer = (props) => {
    const {
        match: {params: {categoryName}}
    } = props

    const [specificCategoryName, setSpecificCategoryName] = useState(null)
    const [specificCategoryId, setSpecificCategoryId] = useState(null)

    useEffect(() => {
        if (categoryName) {
            catalogAPI.getCategoryInfo(categoryName).then(({data}) => {
                setSpecificCategoryId(data.id)
                setSpecificCategoryName(data.name)
            })
        } else {
            setSpecificCategoryId(null)
            setSpecificCategoryName(null)
        }
    }, [categoryName])

    return <CatalogPage
        specificCategoryName={specificCategoryName}
        specificCategoryId={specificCategoryId}
    />
}

export default compose(withRouter)(CatalogPageContainer)