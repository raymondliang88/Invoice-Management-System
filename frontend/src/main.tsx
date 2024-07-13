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
import PrivateLayout from './(private)/PrivateLayout'

const MainComponent: React.FC = () => {
    return (
        <div className="main">
            <div className="w-full space-y-8">
                <Router>
                    <Routes>
                        <Route element={<PrivateLayout />}>
                            <Route path={ROUTES.INOVICES_ROUTE} element={<InvoicesPage />} />
                        </Route>
                        <Route element={<PublicLayout />} >
                            <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                            <Route path={ROUTES.LOGIN_ROUTE} element={<LoginPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default MainComponent
