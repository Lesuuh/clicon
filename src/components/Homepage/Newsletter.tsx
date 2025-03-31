import { Button } from "../ui/button";

const Newsletter = () => {
  return (
    <section className=" px-4 md:px-20 w-full max-w-[1400px] mx-auto bg-secondary my-10 p-5 flex items-center justify-center flex-col rounded-sm">
      <h2 className="text-white text-xl mb-3 text-center">
        Subscribe to our Newsletter
      </h2>
      <p className="text-xs text-white opacity-[0.7] text-center font-normal mb-5">
        Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero
        et cursus. Donec non quam urna. Quisque vitae porta ipsum.
      </p>
      <form action="" className="w-full max-w-md relative flex items-center">
        <div className="relative w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white w-full py-3 px-4 pr-20 rounded-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-sm px-4 py-2 text-sm hover:bg-primary-dark transition-all duration-300">
            Subscribe
          </Button>
        </div>
      </form>
      <div className="logos flex items-center justify-center gap-4 mt-5">
        <img
          src="/icons/google-2015 1.svg"
          alt="Google"
          className="w-12 h-auto"
        />
        <img
          src="/icons/samsung-4 1.svg"
          alt="Samsung"
          className="w-12 h-auto"
        />
        <img
          src="/icons/toshiba-1 1.svg"
          alt="Toshiba"
          className="w-12 h-auto"
        />
        <img
          src="/icons/amazon-icon-1 1.svg"
          alt="Amazon"
          className="w-12 h-auto"
        />
        <img src="/icons/philips 1.svg" alt="Philips" className="w-12 h-auto" />
      </div>
    </section>
  );
};

export default Newsletter;
