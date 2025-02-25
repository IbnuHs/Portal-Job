// src/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="bg-blue-600 text-white p-20 text-center">
            <h2 className="text-4xl font-bold mb-4">Find Your Dream Job Today!</h2>
            <p className="text-lg mb-8">
                Browse thousands of job opportunities and apply with just one click.
            </p>
            <button className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-100">
                Get Started
            </button>
        </section>
    );
};

export default HeroSection;
