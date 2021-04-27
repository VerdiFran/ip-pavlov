import './App.css'
import Header from './components/Header/Header'
import {BrowserRouter, withRouter} from 'react-router-dom'

const App = () => {
    return (
        <div className="App">
            <Header/>
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
