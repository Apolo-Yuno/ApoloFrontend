import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MerchantProvider } from './context/MerchantContext';
import MerchantPage from './pages/MerchantPage';
import CRMPage from './pages/CRMPage';

function App() {
    return (
        <MerchantProvider>
            <BrowserRouter>



                <Routes>

                    <Route path="/" element={<MerchantPage />} />


                    <Route path="/crm" element={<CRMPage />} />
                </Routes>
            </BrowserRouter>
        </MerchantProvider>
    );
}

export default App;