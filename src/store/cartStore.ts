import { create } from "zustand";

type Food = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
};
type CartStore = {
  cart: Food[];
  addToCart: (food: Food) => void;
  increaseQuantity: (foodID: number) => void;
  clearCart: () => void;
};
export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (food) => set((state) => ({ cart: [...state.cart, food] })),
  increaseQuantity: (foodID) =>
    set((state) => ({
      cart: state.cart.map((item) => {
        if (item.id === foodID) return { ...item, quantity: item.quantity + 1 };
        return item;
      }),
    })),
  clearCart: () => set({ cart: [] }),
}));
