import { ProductTypes } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware"; // ✅ this is needed!

interface CartItem {
  product: ProductTypes;
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  addToCart: (product: ProductTypes) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  deleteFromCart: (productId: number) => void;
  clearCart: () => void;
  totalQuantity: () => number;
}

export const useCartStore = create<CartProps>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const { cart } = get();
        set(() => {
          const existingItem = cart.find(
            (item) => item.product.id === product.id
          );
          if (existingItem) {
            return {
              cart: cart.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return { cart: [...cart, { product, quantity: 1 }] };
          }
        });
      },

      increaseQuantity: (productId) => {
        const { cart } = get();
        set(() => ({
          cart: cart.map((item) =>
            item.product.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }));
      },

      decreaseQuantity: (productId) => {
        const { cart } = get();
        set(() => ({
          cart: cart.map((item) =>
            item.product.id === productId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }));
      },

      deleteFromCart: (productId) => {
        const { cart } = get();
        set(() => ({
          cart: cart.filter((item) => item.product.id !== productId),
        }));
      },

      clearCart: () => {
        set({ cart: [] });
      },

      totalQuantity: () => {
        const { cart } = get();
        return cart.reduce((acc, item) => acc + item.quantity, 0);
      },
    }),
    {
      name: "cart",
    }
  )
);
