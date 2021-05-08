import './App.scss'
import store from './redux/store'
import {Provider} from "react-redux"

function App() {
    return (
        <div className="App">
        </div>
    )
}

let MainApp = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default MainApp
