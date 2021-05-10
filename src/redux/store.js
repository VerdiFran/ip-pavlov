import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import catalogReducer from './reducers/catalogReducer'

const reducers = combineReducers({
    catalog: catalogReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store