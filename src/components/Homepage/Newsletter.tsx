import { Button } from "../ui/button";

const Newsletter = () => {
  return (
    <div>
      <h2>Subscribe to out Newsletter</h2>
      <p>
        Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero
        et cursus. Donec non quam urna. Quisque vitae porta ipsum.
      </p>
      <form action="">
        <input type="text" />
        <Button>Subscribe</Button>
      </form>
      <div className="logos">
        <img src="/icons/google-2015 1.svg" alt="" />
        <img src="/icons/samsung-4 1.svg" alt="" />
        <img src="/icons/toshiba-1 1.svg" alt="" />
        <img src="/icons/amazon-icon-1 1.svg" alt="" />
        <img src="/icons/philips 1.svg" alt="" />
      </div>
    </div>
  );
};

export default Newsletter;
