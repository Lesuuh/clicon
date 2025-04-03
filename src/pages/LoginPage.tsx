import { Button } from "@/components/ui/button";
import { auth, db } from "@/services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Sign In and Sign Up
  const [passwordPreview, setPasswordPreview] = useState(false);
  const [confirmPasswordPreview, setConfirmPasswordPreview] = useState(false);
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [createAccountDetails, setCreateAccountDetails] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCreateAccountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setCreateAccountDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const {
    fullName,
    email: registerEmail,
    password: registerPassword,
  } = createAccountDetails;

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          fullName: fullName,
          email: registerEmail,
          password: registerPassword,
        });
      }
      toast.success("User registration successful", { position: "top-center" });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message, { position: "top-center" });
      } else {
        toast.error("An unknown error occurred", { position: "top-center" });
      }
    }
  };

  const { email: loginEmail, password: loginPassword } = loginDetails;

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      toast.success("Login successful");
      navigate("/profile");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, { position: "top-center" });
      } else {
        toast.error("An unknown error occurred", { position: "top-center" });
      }
    }
  };

  return (
    <section className="my-10 mx-auto w-full max-w-[1400px] px-5 md:px-20 flex items-center justify-between">
      <div className="mx-auto w-[350px] flex flex-col justify-center items-center shadow-2xl p-5 rounded-xs">
        {/* Heading */}
        <div className="heading flex justify-evenly items-center w-full">
          <h2
            onClick={() => setIsSignUp(false)} // Set to Sign In
            className={`cursor-pointer ${
              !isSignUp ? "font-bold" : "text-gray-500"
            }`}
          >
            Sign In
          </h2>
          <h2
            onClick={() => setIsSignUp(true)} // Set to Sign Up
            className={`cursor-pointer ${
              isSignUp ? "font-bold" : "text-gray-500"
            }`}
          >
            Sign Up
          </h2>
        </div>

        {/* Sliding Form */}
        <div
          className={`flex items-center w-full my-4 transform relative transition-transform duration-500 ${
            isSignUp ? "translate-x-[50%]" : "translate-x-0"
          }`}
        >
          <div className="w-[50%] h-[2px] bg-primary"></div>
        </div>

        {/* Form */}
        {!isSignUp ? (
          <form onSubmit={handleLogin} className="space-y-4 w-full">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[.7rem] font-semibold">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={loginDetails.email}
                onChange={(e) => handleLoginChange(e)}
                className="border text-[.7rem] px-2 py-1 rounded-xs border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-[.7rem] font-semibold flex justify-between items-center">
                <label htmlFor="password">Password</label>
                <p className="text-secondary ">Forget Password</p>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                value={loginDetails.password}
                onChange={(e) => handleLoginChange(e)}
                className="border text-[.7rem] px-2 py-1 rounded-xs border-gray-300"
              />
            </div>
            <Button className="w-full text-white text-[.7rem] rounded-xs">
              SIGN IN <ArrowRight />
            </Button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4 w-full">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-[.7rem]">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="name"
                value={createAccountDetails.fullName}
                onChange={(e) => handleCreateAccountChange(e)}
                className="border text-[.7rem] px-2 py-1 rounded-xs border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[.7rem]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={createAccountDetails.email}
                onChange={(e) => handleCreateAccountChange(e)}
                className="border text-[.7rem] px-2 py-1 rounded-xs border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-[.7rem]">
                Password
              </label>
              <div className="relative flex flex-col">
                <input
                  type={passwordPreview ? "text" : "password"}
                  name="password"
                  id="password"
                  value={createAccountDetails.password}
                  onChange={(e) => handleCreateAccountChange(e)}
                  className="border text-[.7rem] px-2 py-1 rounded-xs border-gray-300"
                />
                <div className="absolute  top-1/2 right-3 transform -translate-y-1/2 flex items-center">
                  {passwordPreview ? (
                    <EyeOff
                      onClick={() => setPasswordPreview(false)}
                      size={16}
                      className="text-gray"
                    />
                  ) : (
                    <Eye
                      onClick={() => setPasswordPreview(true)}
                      size={16}
                      className="text-gray"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="cpassword" className="text-[.7rem]">
                Confirm Password
              </label>
              <div className="relative flex flex-col">
                <input
                  type={confirmPasswordPreview ? "text" : "password"}
                  name="confirmPassword"
                  id="cpassword"
                  value={createAccountDetails.password}
                  onChange={(e) => handleCreateAccountChange(e)}
                  className="border text-[.7rem] px-2 py-1 rounded-xs border-gray-300"
                />
                <div className="absolute  top-1/2 right-3 transform -translate-y-1/2 flex items-center">
                  {confirmPasswordPreview ? (
                    <EyeOff
                      onClick={() => setConfirmPasswordPreview(false)}
                      size={16}
                      className="text-gray"
                    />
                  ) : (
                    <Eye
                      onClick={() => setConfirmPasswordPreview(true)}
                      size={16}
                      className="text-gray"
                    />
                  )}
                </div>
              </div>
            </div>
            <Button className="w-full text-white text-[.7rem] rounded-xs cursor-pointer">
              SIGN UP <ArrowRight />
            </Button>
          </form>
        )}

        {/* Separator */}
        <div className="flex items-center w-full my-4">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <p className="mx-2 text-gray-500 text-[.7rem]">or</p>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col w-full gap-4">
          <Button className="bg-white text-gray border-[1px] text-[.7rem] rounded-xs border-gray-200 relative hover:bg-white hover:border-primary hover:text-primary cursor-pointer">
            Login with Google
            <img
              src="/public/icons/Google.png"
              alt="google icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
          </Button>
          <Button className="bg-white text-gray border-[1px] text-[.7rem] rounded-xs border-gray-200 relative hover:bg-white hover:border-primary hover:text-primary cursor-pointer">
            Login with Facebook
            <img
              src="/public/icons/facebook-logo.png"
              alt="google icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
