import Header from './components/Header/Header'
import {BrowserRouter, withRouter} from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import store from './redux/store'
import {Provider} from 'react-redux'

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Home/>
        </div>
    )
}

const AppContainer = withRouter(App)

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
