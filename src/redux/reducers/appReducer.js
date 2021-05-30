import {downloadPartners} from './catalogReducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state
        }
    }
}

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => async (dispatch) => {
    const promises = []

    Promise.all(promises)
        .then(() => {
            dispatch(initializedSuccess())
        })

    dispatch(await downloadPartners())
}

export default appReducer
