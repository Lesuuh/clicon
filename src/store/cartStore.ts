import { ProductTypes } from "@/lib/types";
import { create } from "zustand";

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
}

export const useCartStore = create<CartProps>((set) => ({
  cart: [],

  // adding to cart
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { cart: [...state.cart, { product, quantity: 1 }] };
      }
    });
  },

  // increase cart quanitity
  increaseQuantity: (productId: number) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }));
  },

  //   decrease cart quantity
  decreaseQuantity: (productId: number) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    }));
  },

  // deleting from cart
  deleteFromCart: (productId: number) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== +productId),
    }));
  },

  // clear cart
  clearCart: () => {
    set({ cart: [] });
  },
}));
