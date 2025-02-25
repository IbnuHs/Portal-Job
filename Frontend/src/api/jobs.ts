// src/api/jobs.ts

import api from './config';
import type { JobsResponse, Job } from './types';

export const jobsApi = {
    // Mengambil semua data pekerjaan
    async getAll(): Promise<Job[]> {
        try {
            const response = await api.get<JobsResponse>('/jobs');
            return response.data.jobs;
        } catch (error) {
            console.error('Error fetching all jobs:', error);
            throw error;
        }
    },

    // Mengambil data pekerjaan berdasarkan ID
    async getById(id: number): Promise<Job> {
        try {
            const response = await api.get(`/jobs/${id}`);
            return response.data.job;
        } catch (error) {
            console.error(`Error fetching job with ID ${id}:`, error);
            throw error;
        }
    },

    // Mencari pekerjaan berdasarkan kata kunci
    async search(query: string): Promise<Job[]> {
        try {
            const response = await api.get<JobsResponse>('/jobs', {
                params: { search: query },
            });
            return response.data.jobs;
        } catch (error) {
            console.error('Error searching jobs:', error);
            throw error;
        }
    },

    // Mengambil pekerjaan berdasarkan kategori
    async getByCategory(categoryId: number): Promise<Job[]> {
        try {
            const response = await api.get<JobsResponse>('/jobs', {
                params: { categoryId },
            });
            return response.data.jobs;
        } catch (error) {
            console.error('Error fetching jobs by category:', error);
            throw error;
        }
    }
};
