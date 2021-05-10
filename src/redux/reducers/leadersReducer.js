import {salesLeadersApi} from '../../api/salesLeadersApi'

const SET_LEADERS = 'SET-LEADERS'

const initialState = {
    leaders: []
}

/**
 * Reducer for management of sales leaders data.
 * @param state Leaders state.
 * @param action Action.
 * @return New state.
 */
const leadersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LEADERS:
            return {
                ...state,
                leaders: action.leaders
            }
        default:
            return {
                ...state
            }
    }
}

export default leadersReducer

const setLeaders = (leaders) => ({
    type: SET_LEADERS,
    leaders
})

/**
 * Download leaders and save it in state.
 */
export const downloadLeaders = () => async (dispatch) => {
    try {
        const response = await salesLeadersApi.getSalesLeaders()
        dispatch(setLeaders(response.data))
    } catch (error) {
        console.log(error)
    }
}