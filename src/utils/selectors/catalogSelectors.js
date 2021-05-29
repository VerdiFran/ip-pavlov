export const getCategories = (state) => {
    return state.catalog.categories
}

export const getEightRandomCategories = (state) => {
    const categories = state.catalog.categories
    const randomCategoryIds = state.catalog.randomCategoryIds

    return categories.filter(category => randomCategoryIds.includes(category.id))
}