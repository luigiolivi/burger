import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './containers/Home'
import Orders from './containers/Orders'

function AllRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Orders />} />
            </Routes>
        </Router>
    )
}

export default AllRoutes

