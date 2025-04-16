import { googleProvider } from "@/services/auth";
import { auth, db } from "@/services/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { create } from "zustand";
import { toast } from "react-toastify";
import { persist } from "zustand/middleware";

interface AuthState {
  user: any;
  userData: any;
  loading: boolean;
  error: any;
  initAuth: () => void;
  login: (
    email: string,
    password: string,
    navigate: (path: string) => void
  ) => Promise<void>;
  register: (
    email: string,
    password: string,
    fullname: string,
    navigate: (path: string) => void
  ) => Promise<void>;
  loginWithGoogle: (navigate: (path: string) => void) => Promise<void>;
  logOut: (navigate: (path: string) => void) => Promise<void>;
  fetchUserData: (uid: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      userData: null,
      loading: false,
      error: null,

      initAuth: () => {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            set({ user: user, loading: false });
            await get().fetchUserData(user.uid);
          } else {
            set({ user: null, loading: false, error: null });
          }
        });
      },

      login: async (email, password, navigate) => {
        set({ loading: true, error: null });
        try {
          const userCredentials = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredentials.user;
          set({ user, loading: false });
          await get().fetchUserData(user.uid);

          toast.success("Login successful!");
          navigate("/profile");
        } catch (error) {
          set({ loading: false, error });
          const errorMessage =
            error instanceof Error ? error.message : "Login failed.";
          toast.error(`Email or Password does not exist: ${errorMessage}`);
        }
      },

      register: async (email, password, fullName, navigate) => {
        set({ loading: true, error: null });
        try {
          const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredentials.user;
          await setDoc(doc(db, "Users", user.uid), { email, fullName });

          toast.success("Registration successful!");
          navigate("/profile");
        } catch (error) {
          set({ loading: false, error });
          const errorMessage =
            error instanceof Error ? error.message : "Registration Failed";
          toast.error(errorMessage);
        }
      },

      loginWithGoogle: async (navigate) => {
        set({ loading: true, error: null });
        try {
          const userCredentials = await signInWithPopup(auth, googleProvider);
          const user = userCredentials.user;
          set({ user, loading: false });

          const userDocRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(userDocRef);

          if (!docSnap.exists()) {
            await setDoc(userDocRef, {
              email: user.email,
              displayName: user.displayName,
              photoUrl: user.photoURL,
            });
          }

          toast.success("Google Login successful!");
          navigate("/profile");
        } catch (error) {
          set({ loading: false, error });
          const errorMessage =
            error instanceof Error ? error.message : "Google Login Failed";
          toast.error(errorMessage);
        }
      },

      logOut: async (navigate) => {
        set({ loading: true, error: null });
        try {
          await signOut(auth);
          set({ user: null, userData: null, loading: false, error: null });
          toast.success("Logged out successfully!");
          navigate("/login");
        } catch (error) {
          set({ loading: false, error });
          const errorMessage =
            error instanceof Error ? error.message : "Logout failed";
          toast.error(errorMessage);
        }
      },

      fetchUserData: async (uid) => {
        try {
          const docRef = doc(db, "Users", uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            set({ userData: docSnap.data() });
          } else {
            console.error("User does not exist");
          }
        } catch (error) {
          console.error(error);
        }
      },
    }),
    {
      name: "auth-storage", // key in localStorage
      partialize: (state) => ({ user: state.user, userData: state.userData }), // persist only necessary parts
    }
  )
);
