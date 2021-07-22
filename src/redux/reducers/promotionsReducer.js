import {promotionsApi} from '../../api/promotionsApi'

const SET_PROMOTIONS = 'SET-PROMOTIONS'

const initialState = {
    promotions: []
}

/**
 * Reducer for management of promotions data.
 * @param state Promotions state.
 * @param action Action.
 * @return New state.
 */
const promotionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROMOTIONS:
            return {
                ...state,
                promotions: action.promotions
            }
        default:
            return {
                ...state
            }
    }
}

const setPromotions = (promotions) => ({
    type: SET_PROMOTIONS,
    promotions: promotions
})

/**
 * Download promotions and save it in state.
 */
export const downloadPromotions = () => async (dispatch) => {
    try {
        const response = await promotionsApi.getPromotions()
        dispatch(setPromotions(response.data))
    } catch (error) {
        console.log(error)
    }
}

export default promotionsReducer