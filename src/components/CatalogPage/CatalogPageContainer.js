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

    const [specificCategoryName, setSpecificCategoryName] = useState()
    const [specificCategoryId, setSpecificCategoryId] = useState()
    const [categoryIsSpecified, setCategoryIsSpecified] = useState(categoryName !== undefined)

    useEffect(() => {
        if (categoryName) {
            setCategoryIsSpecified(true)
            catalogAPI.getCategoryInfo(categoryName).then(({data}) => {
                setSpecificCategoryId(data.id)
                setSpecificCategoryName(data.name)
            })
        } else {
            setSpecificCategoryId(null)
            setSpecificCategoryName(null)
            setCategoryIsSpecified(false)
        }
    }, [categoryName])

    return <CatalogPage
        specificCategoryName={specificCategoryName}
        specificCategoryId={specificCategoryId}
        categoryIsSpecified={categoryIsSpecified}
    />
}

export default compose(withRouter)(CatalogPageContainer)