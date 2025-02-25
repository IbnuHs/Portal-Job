// src/hooks/useJobs.ts

import { useEffect, useState } from 'react';
import { jobsApi } from '../api/jobs';
import { Job } from '../api/types';

export const useJobs = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const data = await jobsApi.getAll();
                setJobs(data);
            } catch (error) {
                setError('Failed to fetch jobs.');
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return { jobs, loading, error };
};
