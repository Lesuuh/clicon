import { HomeIcon } from "@/components/icons/HomeIcon";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const NotFound = ({ message }: { message: string }) => {
  return (
    <section className=" my-10 mx-auto w-full max-w-[1400px] px-5 md:px-20 flex justify-center flex-col items-center  ">
      <img
        src="/images/Oops! 404 Error with a broken robot-rafiki (1) 1.png"
        alt="404 image"
        className="w-66"
      />
      <h2 className="text-2xl my-2">404, {message}</h2>
      <p className="text-gray text-[.8rem] text-center my-2">
        Something went wrong. It’s look that your requested could not be found.
        It’s look like the link is broken or the page is removed.
      </p>
      <div className="flex justify-center items-center flex-col md:flex-row gap-2 mt-2 w-full">
        <Button
          onClick={() => window.history.back()}
          className="w-32 cursor-pointer text-white text-[.7rem] rounded-xs"
        >
          <ArrowLeft /> GO BACK
        </Button>
        <Link to="/">
          <Button
            variant={"outline"}
            className="w-32 cursor-pointer text-[.7rem] rounded-xs border-primary border text-primary"
          >
            <HomeIcon className="text-primary outline-primary" /> GO TO HOME
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
