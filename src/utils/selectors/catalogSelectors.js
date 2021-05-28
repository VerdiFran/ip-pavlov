export const getCategories = (state) => {
    return state.catalog.categories
}

export const getEightRandomCategories = (state) => {
    const categories = state.catalog.categories

    if (categories.length <= 8) {
        return categories
    }

    const shuffle = (array) => {
        return array.sort(function () {
            return 0.5 - Math.random()
        })
    }

    return shuffle(categories).slice(0, 8)
}

export const getPartners = (state) => state.catalog.partners

export const getProducts = (state) => state.catalog.products

export const getProductsIsDownloaded = (state) => state.catalog.productsIsDownloaded

export const getProductsTotalPages = (state) => state.catalog.totalPages
