import {shuffle} from '../helpers/ArrayHelpers'
import {IdGenerator} from '../generators/generators'

/**
 * Get all categories.
 * @param state State.
 * @param searchTerm Term for searching.
 */
export const getCategories = (state, searchTerm) => {
    const filteredCategories = searchTerm === '' ? state.catalog.categories : state.catalog.categories
        .filter(category => category.name.toUpperCase().includes((searchTerm || '').toUpperCase()))

    return filteredCategories.map(category => ({
        ...category,
        key: IdGenerator().next().value
    }))
}

/**
 * Returns 8 random categories.
 * @param state State
 */
export const getEightRandomCategories = (state) => {
    const getMappedCategories = (categories) => categories.map(category => ({
        ...category,
        key: IdGenerator().next().value
    }))

    const categories = state.catalog.categories
    if (categories.length <= 8) {
        return getMappedCategories(categories)
    }

    const randomCategories = shuffle(categories).slice(0, 8)
    return getMappedCategories(randomCategories)
}

export const getPartners = (state) => state.catalog.partners

export const getProducts = (state) => state.catalog.products

export const getProductsIsDownloaded = (state) => state.catalog.productsIsDownloaded

export const getProductsTotalPages = (state) => state.catalog.totalPages
