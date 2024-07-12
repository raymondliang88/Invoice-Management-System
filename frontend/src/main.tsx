import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'
import LoginPage from './pages/Login'

import './index.css'

const MainComponent: React.FC = () => {
    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <Router>
                    <Routes>
                        <Route path={ROUTES.HOMEPAGE_ROUTE} element={<LoginPage />} />
                        <Route path={ROUTES.INOVICES} element={<LoginPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default MainComponent
