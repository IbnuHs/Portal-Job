// src/components/Jobs/JobCard.tsx

import React from 'react';
import { Job } from '../../api/types';

interface JobCardProps {
    job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg border hover:shadow-lg transition-shadow duration-200">
            <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{job.description}</p>
            
            <div className="mb-2">
                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {job.Category.name}
                </span>
            </div>
            
            <p className="text-xs text-gray-500">
                <strong>Posted by:</strong> {job.User.username} ({job.User.email})
            </p>
        </div>
    );
};

export default JobCard;
