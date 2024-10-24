/** @format */
import api from "./api";
import { create } from "zustand";

interface StoreState {
  products: any[];
  getProducts: () => void;
}

const useStore = create<StoreState>((set) => ({
  products: [],
  getProducts: async () => {
    const products = await api.getProducts();
    set({ products: products });
  },
}));

export default useStore;
