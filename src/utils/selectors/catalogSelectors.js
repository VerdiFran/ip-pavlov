export const getCategories = (state) => {
    return state.catalog.categories
}

export const getEightRandomCategories = (state) => {
    const categories = state.catalog.categories
    const randomCategoryIds = state.catalog.randomCategoryIds

    return categories.filter(category => randomCategoryIds.includes(category.id))
}

export const getPartners = (state) => state.catalog.partners

export const getProducts = (state) => state.catalog.products

export const getProductsIsDownloaded = (state) => state.catalog.productsIsDownloaded

export const getProductsTotalPages = (state) => state.catalog.totalPages
