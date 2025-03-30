import { HeadPhoneIcon } from "../icons/HeadphoneIcon";
import CreditCard from "../icons/CreditCard";
import TrophyIcon from "../icons/TrophyIcon";
import PackageIcon from "../icons/PackageIcon";

const HeroBanner = () => {
  return (
    <section className="flex items-center-justify-between flex-col border-1 border-gray-50">
      <div className="grid grid-cols-2 p-3 sm:grid-cols-4">
        <div className="flex items-center  gap-2 sm:gap-4">
          <PackageIcon className="w-4 sm:w-6" />
          <div>
            <p className="text-xs">FASTED DELIVERY</p>
            <p className="text-xs font-extralight">Delivery in 24/H</p>
          </div>
        </div>
        <div className="flex items-center  gap-2 sm:gap-4">
          <TrophyIcon className="w-4 sm:w-6" />
          <div>
            <p className="text-xs">FASTED DELIVERY</p>
            <p className="text-xs font-extralight">Delivery in 24/H</p>
          </div>
        </div>
        <div className="flex items-center  gap-2 sm:gap-4">
          <CreditCard className="w-4 sm:w-6" />
          <div>
            <p className="text-xs">FASTED DELIVERY</p>
            <p className="text-xs font-extralight">Delivery in 24/H</p>
          </div>
        </div>
        <div className="flex items-center  gap-2 sm:gap-4">
          <HeadPhoneIcon className="w-4 sm:w-6" />
          <div>
            <p className="text-xs">FASTED DELIVERY</p>
            <p className="text-xs font-extralight">Delivery in 24/H</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
