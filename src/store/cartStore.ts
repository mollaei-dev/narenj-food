import { create } from "zustand";

type Food = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};
type CartStore = {
  cart: Food[];
  addToCart: (food: Food) => void;
  clearCart: () => void;
};
export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (food) => set((state) => ({ cart: [...state.cart, food] })),
  clearCart: () => set({ cart: [] }),
}));
