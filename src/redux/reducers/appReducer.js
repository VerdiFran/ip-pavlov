import {chooseEightRandomCategories, downloadCategories} from './catalogReducer'

const INITIALIZED_SUCCESS = 'APP/INITIALIZED_SUCCESS'
const SET_MESSAGE = 'APP/SET-MESSAGE'
const DELETE_MESSAGE = 'APP/DELETE-MESSAGE'

export const messageStatuses = {
    success: 'SUCCESS',
    error: 'ERROR'
}

const messagesClassnames = {
    [messageStatuses.success]: 'message success',
    [messageStatuses.error]: 'message error'
}

/**
 * Get classnames for message
 * @param status Status of message
 * @returns {*}
 */
export const getMessageClassname = (status) => messagesClassnames[status]

const initialState = {
    initialized: false,
    message: '',
    messageVisible: false,
    messageStatus: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        case SET_MESSAGE:
            return {
                ...state,
                message: action.message,
                messageVisible: true,
                messageStatus: action.status
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messageVisible: false,
                message: '',
                messageStatus: null
            }
        default: {
            return state
        }
    }
}

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
const setMessage = (message, status) => ({type: SET_MESSAGE, message, status})
const deleteMessage = () => ({type: DELETE_MESSAGE})

export const initializeApp = () => async (dispatch) => {
    const promise = dispatch(await downloadCategories())

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
            dispatch(chooseEightRandomCategories())
        })
}

export const showMessage = (status, message) => (dispatch) => {
    dispatch(setMessage(message, status))
    setTimeout(() => {
        dispatch(deleteMessage())
    }, 4000)
}

export default appReducer
