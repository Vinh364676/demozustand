import { Category } from "@/types/category";
import { getAsync } from "./Client";

const categoryService = {
  getCategory: async (): Promise<Category[]> => {
    try {
      const response = await getAsync<{ categorys: Category[] }>('todos');

      if (response.data && Array.isArray(response.data)) {
        return response.data;
      } else {
        throw new Error('Invalid response format: Expected an array of categories.');
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      throw new Error((error as Error).message);
    }
  },
  getCategoryDetail: async (id:number): Promise<Category> => {
    try {
      const response = await getAsync<Category>(`todos/${id}`);
      if (response.data) {
        return response.data;
      } else {
        throw new Error('Invalid response format: Expected an array of categories.');
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      throw new Error((error as Error).message);
    }
  },
};

export default categoryService;
