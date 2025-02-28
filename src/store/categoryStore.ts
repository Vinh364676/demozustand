import { create } from 'zustand';
import { Category } from '@/types/category';
import categoryService from '@/api/category';

interface CategoryState {
  categories: Category[];
  categoryDetail: Category | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
  fetchCategories: () => Promise<void>;
  fetchCategoryDetail: (id: number) => Promise<void>;
}

const useCategoryStore = create<CategoryState>((set, get) => ({
  categories: [],
  categoryDetail: null,
  loading: false,
  error: null,
  initialized: false,

  fetchCategories: async () => {
    const state = get();

    set({ loading: true, error: null });
    try {
      const categories = await categoryService.getCategory();
      set({ 
        categories, 
        loading: false, 
        initialized: state.initialized 
      });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  fetchCategoryDetail: async (id: number) => {
    try {
      const categoryDetail = await categoryService.getCategoryDetail(id);
      set({ categoryDetail, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
 
}));


useCategoryStore.getState().fetchCategories();

export default useCategoryStore;