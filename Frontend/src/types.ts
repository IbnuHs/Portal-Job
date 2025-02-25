export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Job {
  id: number;
  title: string;
  description: string;
  userId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  User: User;
  Category: Category;
}