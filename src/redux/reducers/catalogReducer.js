import catalogAPI from '../../api/catalogApi'
import {shuffle} from '../../utils/helpers/ArrayHelpers'

const SET_CATEGORIES = 'SET-CATEGORIES'
const SET_RANDOM_CATEGORY_IDS = 'CATALOG/SET-RANDOM-CATEGORY_IDS'

const initialState = {
    categories: [],
    randomCategoryIds: []
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            }
        }
        case SET_RANDOM_CATEGORY_IDS:
            return {
                ...state,
                randomCategoryIds: action.categoryIds
            }
        default: {
            return state
        }
    }
}

const setCategories = (categories) => ({type: SET_CATEGORIES, categories})
const setRandomCategoryIds = (categoryIds) => ({type: SET_RANDOM_CATEGORY_IDS, categoryIds})

/**
 * Get categories from server and set categoryMenuItem to state
 * @returns {function(*): Promise<void>}
 */
export const downloadCategories = () => async (dispatch) => {
    const {data} = await catalogAPI.getCategoriesNames()

    dispatch(setCategories(data.map(category => ({
        ...category,
        title: category.name,
        path: `/categories/${category.routeName}`
    }))))
}

export const chooseEightRandomCategories = () => (dispatch, getState) => {
    const categoryIds = getState().catalog.categories.map(category => category.id)

    if (categoryIds.length <= 8) {
        return categoryIds
    }

    const randomCategoryIds = shuffle(categoryIds).slice(0, 8)

    dispatch(setRandomCategoryIds(randomCategoryIds))
}

export default catalogReducer
