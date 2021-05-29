import {chooseEightRandomCategories, downloadCategories} from './catalogReducer'

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
    const promise = dispatch(await downloadCategories())

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
            dispatch(chooseEightRandomCategories())
        })
}

export default appReducer
