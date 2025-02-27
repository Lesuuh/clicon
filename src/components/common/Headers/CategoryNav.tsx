import { useState } from "react";
import {
  FaCamera,
  FaComputer,
  FaComputerMouse,
  FaGamepad,
  FaHeadphones,
  FaMobile,
  FaTv,
} from "react-icons/fa6";
import { IoWatch } from "react-icons/io5";
import { Link } from "react-router";

const categories = [
  {
    icon: <FaComputer />,
    name: "Computer & Laptops",
    subcategories: [
      "Laptops",
      "Desktops",
      "Gaming Laptops",
      "MacBooks",
      "Chromebooks",
    ],
  },
  {
    icon: <FaComputerMouse />,
    name: "Computer Accessories",
    subcategories: [
      "Keyboards",
      "Mice",
      "Monitors",
      "External Hard Drives",
      "USB Hubs",
    ],
  },
  {
    icon: <FaMobile />,
    name: "SmartPhone",
    subcategories: [
      "iPhone",
      "Samsung",
      "Xiaomi",
      "Oppo",
      "OnePlus",
      "Realme",
      "Vivo",
      "Huawei",
    ],
  },
  {
    icon: <FaHeadphones />,
    name: "Headphone",
    subcategories: [
      "Wireless Headphones",
      "Wired Headphones",
      "Noise Cancelling",
      "Earbuds",
      "Gaming Headsets",
    ],
  },
  {
    icon: <FaMobile />,
    name: "Mobile Accessories",
    subcategories: [
      "Chargers",
      "Power Banks",
      "Phone Cases",
      "Screen Protectors",
      "Cables & Adapters",
    ],
  },
  {
    icon: <FaGamepad />,
    name: "Gaming Consoles",
    subcategories: [
      "PlayStation",
      "Xbox",
      "Nintendo Switch",
      "Gaming Controllers",
      "VR Headsets",
    ],
  },
  {
    icon: <FaCamera />,
    name: "Camera & Photo",
    subcategories: [
      "DSLR Cameras",
      "Mirrorless Cameras",
      "Point & Shoot Cameras",
      "Action Cameras",
      "Camera Lenses",
    ],
  },
  {
    icon: <FaTv />,
    name: "TV & Home Appliance",
    subcategories: [
      "Smart TVs",
      "LED TVs",
      "Refrigerators",
      "Air Conditioners",
      "Microwaves",
    ],
  },
  {
    icon: <IoWatch />,
    name: "Watches & Accessories",
    subcategories: [
      "Smartwatches",
      "Analog Watches",
      "Digital Watches",
      "Watch Straps",
      "Luxury Watches",
    ],
  },
  {
    icon: <FaMobile />,
    name: "Wearable Technology",
    subcategories: [
      "Smartwatches",
      "Fitness Trackers",
      "VR Headsets",
      "Smart Glasses",
      "Smart Rings",
    ],
  },
];

const CategoryNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="relative">
      <button
        className="bg-red-500 px-5 py-1 text-white"
        onClick={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        All categories
      </button>

      {isHovered && (
        <ul
          className="absolute flex flex-col py-4 bg-white shadow-lg mt-2 w-60 px-4 rounded-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {categories.map((item, index) => (
            <li
              key={index}
              className={`${
                activeCategory ? "hover:bg-gray-100" : ""
              } py-1 text-sm px-2`}
              onMouseEnter={() =>
                item.subcategories.length > 0
                  ? setActiveCategory(item.name)
                  : setActiveCategory(null)
              }
            >
              {item.name}
              {activeCategory === item.name && (
                <ul className="absolute flex flex-col py-4 left-full top-0 bg-white shadow-lg w-50 px-4 rounded-md">
                  {item.subcategories.map((sub, subIndex) => (
                    <Link
                      to={`${activeCategory}/${sub}`}
                      key={subIndex}
                      className={`${
                        activeCategory ? "hover:bg-gray-100" : ""
                      } py-1  text-sm px-2`}
                    >
                      <li>{sub}</li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryNav;
