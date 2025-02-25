import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Layout/HeroSection';
import SearchBar from './components/Search/SearchBar';
import JobList from './components/Jobs/JobList';
import Testimonials from './components/Layout/Testimonials';
import "./index.css"; 

const App: React.FC = () => {
    return (
        <div className="bg-gray-100">
            {/* Bagian Header */}
            <Header />

            {/* Bagian Hero Section */}
            <HeroSection />

            {/* Bagian Pencarian Pekerjaan */}
            <SearchBar />

            {/* Bagian Daftar Pekerjaan */}
            <div className="container mx-auto p-4">
                <JobList />
            </div>

            {/* Bagian Testimoni */}
            <Testimonials />

            {/* Bagian Footer */}
            <Footer />
        </div>
    );
};

export default App;
