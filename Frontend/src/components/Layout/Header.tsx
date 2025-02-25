// src/components/Layout/Header.tsx
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">JobPortal</h1>
            <nav>
                <a href="#jobs" className="px-4 text-gray-700">Jobs</a>
                <a href="#testimonials" className="px-4 text-gray-700">Testimonials</a>
            </nav>
        </header>
    );
};

export default Header;
