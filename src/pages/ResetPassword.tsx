import { Button } from "@/components/ui/button";
import { auth } from "@/services/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const actionCodeSettings = {
    url: "http://localhost:5173/login",
    handleCodeInApp: true,
  };

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      toast.success("Password reset link sent. Check your inbox");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const handleResetChange = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setEmail(value);
  };
  return (
    <section className="my-10 mx-auto w-full max-w-[1400px] px-5 md:px-20 flex items-center justify-between">
      <div className="mx-auto w-[350px] flex flex-col justify-center items-center shadow-2xl p-5 rounded-xs">
        {/* Heading */}

        <h2 className="text-xl">Reset Password</h2>

        <p className="text-[.7rem] text-gray text-center my-3">
          Enter your email address, and we'll send you a link to reset your
          password
        </p>

        {/* Form */}
        <form onSubmit={handleResetPassword} className="space-y-4 w-full ">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[.7rem]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => handleResetChange(e)}
              className="border text-[.7rem] px-2 py-1 rounded-xs border-gray-300"
            />
          </div>

          <Button className="w-full text-white text-[.7rem] rounded-xs">
            RESET PASSWORD <ArrowRight />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
