import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import MainComponent from './main'
import { persistor, store } from './store'
import { ToastContainer } from 'react-toastify';
import { QueryProvider } from './lib/react-query/QueryClient'

const App: React.FC = () => {
    return (
        <QueryProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <MainComponent />
                    <ToastContainer />
                </PersistGate>
            </Provider>
        </QueryProvider>
    )
}

export default App
