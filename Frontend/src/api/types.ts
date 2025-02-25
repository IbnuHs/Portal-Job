// src/api/types.ts

// Tipe data untuk satu pekerjaan
export interface Job {
  id: number;
  title: string;
  description: string;
  userId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  User: {
      id: number;
      username: string;
      email: string;
  };
  Category: {
      id: number;
      name: string;
  };
}

// Tipe data untuk response dari semua pekerjaan
export interface JobsResponse {
  message: string;
  jobs: Job[];
}

// Tipe data untuk response pekerjaan berdasarkan ID
export interface JobResponse {
  message: string;
  job: Job;
}
