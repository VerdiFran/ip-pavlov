import './App.css'
import BlockWrapper from './components/BlockWrapper/BlockWrapper'
import PageWrapper from './components/PageWrapper/PageWrapper'

function App() {
    return (
        <div className="App">
            <PageWrapper>
                {
                    [1, 2, 3, 4, 5].map(index => (
                        <BlockWrapper>
                            <div>
                                <h1>heading {index}</h1>
                                <h1>heading {index}</h1>
                                <h1>heading {index}</h1>
                                <h1>heading {index}</h1>
                                <h1>heading {index}</h1>
                            </div>
                        </BlockWrapper>
                    ))
                }
            </PageWrapper>
        </div>
    )
}

export default App
