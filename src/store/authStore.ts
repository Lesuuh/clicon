import { auth, db } from "@/services/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { create } from "zustand";

interface AuthState {
  user: any;
  loading: boolean;
  error: any;
  initAuth: () => void;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  fetchUserData: (uid: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  //   initialize auth listener
  initAuth: () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        set({ user: user, loading: false });
        await useAuthStore.getState().fetchUserData(user.uid);
      } else {
        set({ user: null, loading: false, error: null });
      }
    });
  },

  // login with email and password
  login: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      set({ user: user, loading: false });
      await useAuthStore.getState().fetchUserData(user.uid);
    } catch (error) {
      set({ loading: false, error: error });
    }
  },

  //   register with email and password
  register: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      //   storing data in firestore
      const userDocRef = doc(db, "Users", user.uid);
      await setDoc(userDocRef, { email, password });
    } catch (error) {
      set({ loading: false, error: error });
    }
  },

  logOut: async () => {
    set({ loading: true, error: null });
    try {
      await signOut(auth);
      set({ user: null, loading: false, error: null });
    } catch (error) {
      set({ loading: false, error: error });
    }
  },

  fetchUserData: async (uid: string) => {
    try {
      const docRef = doc(db, "Users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        set({ user: docSnap.data() });
      } else {
        console.error("User does not exist");
      }
    } catch (error) {
      console.error(error);
    }
  },
}));
