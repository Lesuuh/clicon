import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const VerifyEmailPage = () => {
  const [email, setEmail] = useState("");
  const handleVerifyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleVerifyEmail = () => {
    console.log(email);
  };
  return (
    <section className="my-10 mx-auto w-full max-w-[1400px] px-5 md:px-20 flex items-center justify-between">
      <div className="mx-auto w-[350px] flex flex-col justify-center items-center shadow-2xl p-5 rounded-xs">
        {/* Heading */}

        <h2 className="text-xl">Verify Email</h2>

        <p className="text-[.7rem] text-gray text-center my-3">
          Let's get your email verified! Check your inbox for the link.
        </p>

        {/* Form */}
        <form onSubmit={handleVerifyEmail} className="space-y-4 w-full ">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[.7rem]">
              Verify Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => handleVerifyChange(e)}
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

export default VerifyEmailPage;
