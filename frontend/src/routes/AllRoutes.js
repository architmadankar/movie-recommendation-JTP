import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import CheckAuth from './Auth';
import MainRoutes from './MainRoutes';
import DefaultLoader from '../components/loaders/DefaultLoader';
import Login from '../pages/Login';

const AllRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<DefaultLoader />}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<CheckAuth><MainRoutes /></CheckAuth>} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default AllRoutes