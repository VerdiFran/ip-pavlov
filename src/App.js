import Header from './components/Header/Header'
import {BrowserRouter, withRouter, Switch, Route} from 'react-router-dom'
import './App.scss'
import Home from './components/Home/Home'
import * as routes from './routes'
import {connect, Provider} from 'react-redux'
import store from './redux/store'
import {compose} from 'redux'
import {getInitialized, getMessageInfo} from './utils/selectors/appSelectors'
import {getMessageClassname, initializeApp} from './redux/reducers/appReducer'
import React, {useEffect} from 'react'
import Footer from './components/Footer/Footer'
import AboutCompany from './components/AboutCompany/AboutCompany'
import Contacts from './components/Contacts/Contacts'
import PartnersPage from './components/PartnersPage/PartnersPage'
import CatalogPageContainer from './components/CatalogPage/CatalogPageContainer'
import ContactUs from './components/ContactUs/ContactUs'

const App = ({initialized, messageInfo: {status, text, visible}, initializeApp}) => {
    useEffect(() => {
        initializeApp()
    }, [])

    if (!initialized) {
        return <div>loading</div>
    }

    return (
        <div className="App">
            {
                visible && <div className={getMessageClassname(status)}>
                    {text}
                </div>
            }
            <Header/>
            <div className="content">
                <Switch>
                    <Route
                        exact
                        path={routes.TO_HOME}
                        render={() => <Home/>}
                    />
                    <Route
                        path={`${routes.TO_CATALOG}/:categoryName?`}
                        render={() => <CatalogPageContainer/>}
                    />
                    <Route
                        path={routes.TO_ABOUT_COMPANY}
                        render={() => <AboutCompany/>}
                    />
                    <Route
                        path={routes.TO_PARTNERS}
                        render={() => <PartnersPage/>}
                    />
                    <Route
                        path={routes.TO_CONTACTS}
                        render={() => <Contacts/>}
                    />
                </Switch>
            </div>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    initialized: getInitialized(state),
    messageInfo: getMessageInfo(state)
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
