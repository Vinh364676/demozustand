// src/store/categoryStore.ts

import { create } from 'zustand';
import categoryService from '@/api/category';
import { Category } from '@/types/category';

interface CategoryStore {
  categoryData: Category[] | null; 
  loading: boolean;
  error: string | null;

  fetchCategories: () => Promise<void>;
}

const useCategoryStore = create<CategoryStore>((set) => ({
  categoryData: null,
  loading: false,
  error: null,

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const data = await categoryService.getCategory();
      if (Array.isArray(data)) {
        console.log('Fetched categories:', data);
        set({ categoryData: data, loading: false });
      } else {
        throw new Error('Data fetched is not an array.');
      }
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  }
}));

export default useCategoryStore;
