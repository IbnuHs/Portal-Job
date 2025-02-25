// src/components/Jobs/JobGrid.tsx

import React from 'react';
import { Job } from '../../api/types';
import JobCard from './JobCard';

interface JobGridProps {
    jobs: Job[];
}

const JobGrid: React.FC<JobGridProps> = ({ jobs }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
};

export default JobGrid;
