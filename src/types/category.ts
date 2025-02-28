
export interface Category {
    id: number;
    userId: number;
    title: string; 
    completed : boolean;
  }
  
  export interface CategoryStoreState {
    categories: Category[];
    loading: boolean;
    error: string | null;
    fetchCategories: () => Promise<void>;
    addCategory: (data: Omit<Category, 'id'>) => Promise<void>;
    updateCategory: (id: number, data: Partial<Category>) => Promise<void>;
    deleteCategory: (id: number) => Promise<void>;
  }
  