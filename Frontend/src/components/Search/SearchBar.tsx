// src/components/Search/SearchBar.tsx
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        console.log('Search for:', query);
    };

    return (
        <div className="p-8 bg-white shadow-md flex justify-center">
            <input
                type="text"
                placeholder="Search for jobs, skills, or companies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border p-2 rounded-l w-1/2"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-4 rounded-r"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
