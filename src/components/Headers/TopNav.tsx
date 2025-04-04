import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaReddit,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const TopNav = () => {
  // const [selectedLanguage, setSelectedLanguage] = useState<string>("Eng");
  // const [selectedCurrency, setSelectedCurrency] = useState<string>("NGN");
  return (
    <div className="flex flex-wrap text-[.7rem] justify-center md:justify-between items-center py-[10px] text-white">
      <p className="font-normal">Welcome to Clicon online ecommerce store</p>
      <div className="flex items-center space-x-4 font-normal">
        <p>Follow us:</p>
        <FaXTwitter />
        <FaFacebook />
        <FaPinterest />
        <FaReddit />
        <FaYoutube />
        <FaInstagram />
        <div className="w-px h-4 bg-[var(--gray)] mx-3"></div>
      </div>
    </div>
  );
};

export default TopNav;
