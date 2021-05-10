import Header from './components/Header/Header'
import {BrowserRouter, withRouter, Switch, Route, Redirect} from 'react-router-dom'
import './App.scss'
import Home from './components/Home/Home'
import * as routes from './routes'

const App = () => {
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
                    path={routes.TO_CATALOG}
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
                <Redirect to={routes.TO_HOME}/>
            </Switch>
        </div>
    )
}

const AppContainer = withRouter(App)

const MainApp = () => {
    return (
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    )
}

export default MainApp
