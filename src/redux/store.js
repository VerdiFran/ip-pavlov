import {applyMiddleware, combineReducers, createStore} from 'redux'
import leadersReducer from './reducers/leadersReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    leadersReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store