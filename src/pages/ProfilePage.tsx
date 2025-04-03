import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "@/services/firebase";
import { useNavigate } from "react-router";

interface UserDetails {
  fullName: string;
  email: string;
}
const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  // fetching auth status and data
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user?.uid) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data() as UserDetails);
          console.log(docSnap.data());
        } else {
          console.log("User document does not exist");
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const navigate = useNavigate();
  //   logging out
  const logout = async () => {
    await auth.signOut();
    toast.success("Sign Out successful");
    navigate("/login");
  };

  return (
    <div className="h-screen ">
      {userDetails ? (
        <div className="h-screen w-full">
          <h3>Welcome {userDetails.fullName}</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>Fullname: {userDetails.fullName}</p>
            <Button onClick={logout}>log out</Button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
