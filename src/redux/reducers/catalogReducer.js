import catalogAPI from '../../api/catalogApi'
import {imagesApi} from '../../api/imagesApi'

const SET_CATEGORIES = 'SET-CATEGORIES'
const SET_CATEGORY_IMAGE = 'SET-CATEGORY-IMAGE'

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
        case SET_CATEGORY_IMAGE : {
            return {
                ...state,
                categories: state.categories.map(category => {
                    return category.id === action.image.categoryId
                        ? {
                            ...category,
                            image: action.image.image
                        }
                        : category
                })
            }
        }
        default: {
            return state
        }
    }
}

const setCategories = (categories) => ({type: SET_CATEGORIES, categories})
const setCategoryImage = (image) => ({type: SET_CATEGORY_IMAGE, image})

/**
 * Get categories from server and set categoryMenuItem to state
 * @returns {function(*): Promise<void>}
 */
export const downloadCategories = () => async (dispatch) => {
    const {data} = await catalogAPI.getCategoriesNames()

    dispatch(setCategories(data.map(category => ({
        id: category.id,
        title: category.name,
        path: `/categories/${category.routeName}`,
        imageId: category.icon.id,
        image: null
    }))))
}

/**
 * Get images of categories and set it to categories from state
 * @returns {function(*=, *): void}
 */
export const downloadCategoriesImages = () => (dispatch, getState) => {
    getState().catalog.categories.forEach(category => {
        imagesApi.downloadImage(category.imageId, 'Categories')
            .then(result => dispatch(setCategoryImage({categoryId: category.id, image: result})))
    })
}

export default catalogReducer
