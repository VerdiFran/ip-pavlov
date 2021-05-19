import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import catalogReducer from './reducers/catalogReducer'
import appReducer from './reducers/appReducer'
import leadersReducer from './reducers/leadersReducer'

const reducers = combineReducers({
    app: appReducer,
    catalog: catalogReducer,
    leaders: leadersReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store