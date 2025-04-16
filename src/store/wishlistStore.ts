import { ProductTypes } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistProps {
  wishlist: ProductTypes[];
  addToWishlist: (product: ProductTypes) => void;
}

export const useWishlistStore = create<WishlistProps>()(
  persist(
    (set, get) => ({
      wishlist: [],
      addToWishlist: (product) => {
        const { wishlist } = get();
        const exists = wishlist.some((item) => item.id === product.id);
        if (exists) return;
        set({ wishlist: [...wishlist, product] });
      },
      removeFromWishlist: (productId: number) => {
        const { wishlist } = get();
        const item = wishlist.filter((item) => item.id !== productId);
        set(() => ({
          wishlist: item,
        }));
      },
    }),
    {
      name: "wishlist",
    }
  )
);
