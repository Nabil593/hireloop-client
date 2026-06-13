import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const MarketingLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
        </div>
    );
};

export default MarketingLayout;