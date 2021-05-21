import Header from './components/Header/Header'
import {BrowserRouter, withRouter, Switch, Route} from 'react-router-dom'
import './App.scss'
import Home from './components/Home/Home'
import * as routes from './routes'
import {connect, Provider} from 'react-redux'
import store from './redux/store'
import {compose} from 'redux'
import {getInitialized} from './utils/selectors/appSelectors'
import {initializeApp} from './redux/reducers/appReducer'
import {useEffect} from 'react'
import CatalogPage from './components/CatalogPage/CatalogPage'

const App = ({initialized, initializeApp}) => {
    useEffect(() => {
        initializeApp()
    })

    if (!initialized) {
        return <div>loading</div>
    }

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route
                    exact
                    path={routes.TO_HOME}
                    render={() => <Home/>}
                />
                <Route
                    path={`${routes.TO_CATALOG}`}
                    render={() => <CatalogPage/>}
                />
                <Route
                    path={`${routes.TO_CATALOG}/:category`}
                    render={() => <div>catalog</div>}
                />
                <Route
                    path={routes.TO_ABOUT_COMPANY}
                    render={() => <div>about company</div>}
                />
                <Route
                    path={routes.TO_PARTNERS}
                    render={() => <div>partners</div>}
                />
                <Route
                    path={routes.TO_CONTACTS}
                    render={() => <div>contacts</div>}
                />
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => ({
    initialized: getInitialized(state)
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp
