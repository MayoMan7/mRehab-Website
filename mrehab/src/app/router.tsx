import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TechnologiesMobileApp from './pages/technologies-mobileapp';
import Technologies3DPrinting from './pages/Technologies3DPrinting';


import Landing from './pages/landing';
const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/technologies/mobileapp" element={<TechnologiesMobileApp />} />
            <Route path="/technologies/3Dprinting" element={<Technologies3DPrinting />} />

        </Routes>
    </Router>
);

export default AppRouter;