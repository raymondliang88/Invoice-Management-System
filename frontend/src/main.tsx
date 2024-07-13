import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './(public)/pages/HomePage'
import NotFoundPage from './(public)/pages/NotFoundPage'
import { ROUTES } from './constants/RouteConstants'
import './styles/main.sass'
import LoginPage from './(public)/pages/Login'
import InvoicesPage from './(private)/pages/InvoicesPage'

import './index.css'
import PublicLayout from './(public)/PublicLayout'

const MainComponent: React.FC = () => {
    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <Router>
                    <Routes>
                        <Route element={<PublicLayout />} >
                            <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                            <Route path={ROUTES.LOGIN_ROUTE} element={<LoginPage />} />
                        </Route>
                        <Route path={ROUTES.INOVICES_ROUTE} element={<InvoicesPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default MainComponent
