import { saveWishlistToFirebase } from "@/services/wishlistServices";
import { useAuthStore } from "@/store/authStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useEffect } from "react";

const useSyncWishlist = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user.uid) return;
    const unsub = useWishlistStore.subscribe(
      (state) => state.wishlist,
      (newWishlist) => {
        saveWishlistToFirebase(user.uid, newWishlist);
      }
    );
    return unsub;
  }, [user?.uid]);
};

export default useSyncWishlist;
