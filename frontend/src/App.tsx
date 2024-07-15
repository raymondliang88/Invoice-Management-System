import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import MainComponent from './main'
import { persistor, store } from './store'
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <MainComponent />
                <ToastContainer />

            </PersistGate>
        </Provider>
    )
}

export default App
