import { auth } from "@/services/firebase";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
