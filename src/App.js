import Header from './components/Header/Header'
import {BrowserRouter, withRouter} from 'react-router-dom'
import './App.scss'
import Home from './components/Home/Home'

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
            <AppContainer/>
        </BrowserRouter>
    )
}

export default MainApp
