import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaReddit,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,

  // SelectValue,
} from "@radix-ui/react-select";
import { useState } from "react";

const TopHeader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Eng");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("NGN");
  return (
    <div className="flex justify-between items-center py-[12px] text-white">
      <p className="text-sm font-normal">
        Welcome to Clicon online ecommerce store
      </p>
      <div className="flex items-center space-x-4 font-normal text-sm">
        <p>Follow us:</p>
        <FaXTwitter />
        <FaFacebook />
        <FaPinterest />
        <FaReddit />
        <FaYoutube />
        <FaInstagram />
        <div className="w-px h-4 bg-[var(--gray)] mx-3"></div>
        <div>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="outline-none">
              {selectedLanguage}
            </SelectTrigger>
            <SelectContent className="bg-white p-4 text-[var(--secondary)] text-base">
              {["English", "Spanish", "French"].map((fruit) => (
                <SelectItem key={fruit} value={fruit}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="fruit"
                      value={fruit}
                      checked={selectedLanguage === fruit}
                      onChange={() => setSelectedLanguage(fruit)}
                      className="accent-blue-500 outline-none hover:outline-none"
                    />
                    <span className="capitalize">{fruit}</span>
                  </label>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
            <SelectTrigger className="outline-none">
              {selectedCurrency}
            </SelectTrigger>
            <SelectContent className="bg-white p-4 text-[var(--secondary)] text-base">
              {["NGN", "USD"].map((fruit) => (
                <SelectItem key={fruit} value={fruit}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="fruit"
                      value={fruit}
                      checked={selectedCurrency === fruit}
                      onChange={() => setSelectedCurrency(fruit)}
                      className="accent-blue-500 outline-none hover:outline-none"
                    />
                    <span className="capitalize">{fruit}</span>
                  </label>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
