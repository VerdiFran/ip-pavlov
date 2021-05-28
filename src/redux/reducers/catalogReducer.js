import catalogAPI from '../../api/catalogApi'
import {imagesApi} from '../../api/imagesApi'

const SET_CATEGORIES = 'CATALOG/SET-CATEGORIES'
const SET_PARTNERS = 'CATALOG/SET-PARTNERS'
const SET_CATEGORIES_IMAGES = 'CATALOG/SET-CATEGORIES-IMAGES'
const NEXT_PAGE = 'CATALOG/NEXT-PAGE'
const ADD_PRODUCTS = 'CATALOG/ADD_PRODUCTS'
const SET_TOTAL_PAGES = 'CATALOG/SET-TOTAL-PAGES'
const REMOVE_PRODUCTS = 'CATALOG/REMOVE-PRODUCTS'
const SET_PRODUCTS = 'CATALOG/SET-PRODUCTS'
const SET_PRODUCTS_IS_DOWNLOADED = 'CATALOG/SET-PRODUCTS-IS-DOWNLOADED'

const initialState = {
    categories: [],
    partners: [],
    products: [],
    totalPages: null,
    currentPage: 1,
    pageSize: 20,
    productsIsDownloaded: false
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        case SET_CATEGORIES_IMAGES:
            return {
                ...state,
                categories: state.categories.map(category => ({
                    ...category,
                    image: action.images[category.id]
                }))
            }
        case SET_PARTNERS:
            return {
                ...state,
                partners: action.partners
            }
        case ADD_PRODUCTS:
            return {
                ...state,
                products: [...state.products, ...action.products]
            }
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.totalPages
            }
        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        case REMOVE_PRODUCTS:
            return {
                ...state,
                totalPages: null,
                currentPage: 1,
                pageSize: 20,
                products: [],
                productsIsDownloaded: false
            }
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
                currentPage: 1,
                pageSize: 20
            }
        case SET_PRODUCTS_IS_DOWNLOADED:
            return {
                ...state,
                productsIsDownloaded: true
            }
        default: {
            return state
        }
    }
}

const setCategories = (categories) => ({type: SET_CATEGORIES, categories})
const setPartners = (partners) => ({type: SET_PARTNERS, partners})
const setCategoriesImages = (images) => ({type: SET_CATEGORIES_IMAGES, images})
const addProducts = (products) => ({type: ADD_PRODUCTS, products})
const setTotalPages = (totalPages) => ({type: SET_TOTAL_PAGES, totalPages})
const nextPage = () => ({type: NEXT_PAGE})
const setProductsIsDownloaded = () => ({type: SET_PRODUCTS_IS_DOWNLOADED})

export const removeProducts = () => ({type: REMOVE_PRODUCTS})

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
export const downloadCategoriesImages = () => async (dispatch, getState) => {
    const images = {}

    getState().catalog.categories.forEach(category => {
        imagesApi.downloadImage(category.imageId, 'Categories')
            .then(result => images[category.id] = result)
    })

    setCategoriesImages(images)
}

/**
 * Get partners and set it to state
 * @returns {function(*): Promise<void>}
 */
export const downloadPartners = () => async (dispatch) => {
    const {data} = await catalogAPI.getPartners()

    dispatch(setPartners(data))
}

const getProducts = async (name, producerIds, currentPage, totalPages, pageSize) => {
    if ((!totalPages && totalPages !== 0) || currentPage <= totalPages) {
        const {data: {content, total}} = await catalogAPI.getProducts(name, producerIds, pageSize, currentPage)
        return [content, total]
    } else return []
}

export const downloadProducts = (name, producerIds) => async (dispatch, getState) => {
    const currentPage = getState().catalog.currentPage
    const totalPages = getState().catalog.totalPages
    const pageSize = getState().catalog.pageSize
    const [products, total] = await getProducts(name?.toString(), producerIds, currentPage, totalPages, pageSize)

    dispatch(addProducts(products || []))
    dispatch(setTotalPages(total ?? totalPages))
    products ? dispatch(nextPage()) : dispatch(setProductsIsDownloaded())
}

export default catalogReducer
