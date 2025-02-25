// src/components/Jobs/JobList.tsx
import React from 'react';
import JobCard from './JobCard';
import { useJobs } from '../../hooks/useJobs';

const JobList: React.FC = () => {
    const { jobs, loading, error } = useJobs();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section id="jobs" className="p-8 bg-gray-100">
            <h2 className="text-3xl font-bold mb-4">Featured Jobs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </section>
    );
};

export default JobList;
