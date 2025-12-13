// App Component
import React from 'react';
import { MerchantProvider } from './context/MerchantContext';
import MerchantPage from './pages/MerchantPage';

function App() {
    return (
        <MerchantProvider>
            <MerchantPage />
        </MerchantProvider>
    );
}

export default App;
