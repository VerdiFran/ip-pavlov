import catalogAPI from '../../api/catalogApi'

const SET_CATEGORIES = 'SET-CATEGORIES'

const initialState = {
    categories: []
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            }
        }
        default: {
            return state
        }
    }
}

const setCategories = (categories) => ({type: SET_CATEGORIES, categories})

/**
 * Get categories from server and set categoryMenuItem to state
 * @returns {function(*): Promise<void>}
 */
export const downloadCategories = () => async (dispatch) => {
    const {data} = await catalogAPI.getCategoriesNames()

    dispatch(setCategories(data.map(category => ({
        id: category.id,
        title: category.name,
        path: `/categories/${category.routeName}`
    }))))
}

export default catalogReducer
