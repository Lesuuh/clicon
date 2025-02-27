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
      {
        name: "Laptops",
        featured: [
          {
            title: "Apple MacBook Air M2",
            price: "$999",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Dell XPS 13",
            price: "$1,299",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "HP Spectre x360",
            price: "$1,199",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Desktops",
        featured: [
          {
            title: "iMac 24-inch M1",
            price: "$1,299",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "HP Pavilion Gaming Desktop",
            price: "$899",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Dell Inspiron Desktop",
            price: "$799",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Gaming Laptops",
        featured: [
          {
            title: "Asus ROG Zephyrus G15",
            price: "$1,799",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Alienware m15 R6",
            price: "$2,099",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Lenovo Legion 5 Pro",
            price: "$1,599",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    icon: <FaMobile />,
    name: "SmartPhone",
    subcategories: [
      {
        name: "iPhone",
        featured: [
          {
            title: "iPhone 14 Pro Max",
            price: "$1,099",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "iPhone 13 Mini",
            price: "$699",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "iPhone SE (2022)",
            price: "$429",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Samsung",
        featured: [
          {
            title: "Samsung Galaxy S23 Ultra",
            price: "$1,199",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Samsung Galaxy Z Fold 4",
            price: "$1,799",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Samsung Galaxy A53 5G",
            price: "$449",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Xiaomi",
        featured: [
          {
            title: "Xiaomi 13 Pro",
            price: "$999",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Xiaomi Redmi Note 12",
            price: "$299",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Xiaomi Mi 11 Ultra",
            price: "$1,199",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    icon: <FaGamepad />,
    name: "Gaming Consoles",
    subcategories: [
      {
        name: "PlayStation",
        featured: [
          {
            title: "PlayStation 5",
            price: "$499",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "PlayStation 4 Pro",
            price: "$399",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "PlayStation VR2",
            price: "$549",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Xbox",
        featured: [
          {
            title: "Xbox Series X",
            price: "$499",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Xbox Series S",
            price: "$299",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Xbox Elite Controller",
            price: "$179",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Nintendo Switch",
        featured: [
          {
            title: "Nintendo Switch OLED",
            price: "$349",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Nintendo Switch Lite",
            price: "$199",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Nintendo Switch Pro Controller",
            price: "$69",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    icon: <FaHeadphones />,
    name: "Headphones",
    subcategories: [
      {
        name: "Wireless Headphones",
        featured: [
          {
            title: "Sony WH-1000XM5",
            price: "$399",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Bose QuietComfort 45",
            price: "$329",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Apple AirPods Max",
            price: "$549",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Earbuds",
        featured: [
          {
            title: "Apple AirPods Pro 2",
            price: "$249",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Samsung Galaxy Buds 2 Pro",
            price: "$229",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Sony WF-1000XM4",
            price: "$279",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    icon: <FaTv />,
    name: "TV & Home Appliance",
    subcategories: [
      {
        name: "Smart TVs",
        featured: [
          {
            title: 'Samsung 65" QLED 4K',
            price: "$1,499",
            image: "https://via.placeholder.com/150",
          },
          {
            title: 'LG OLED C2 55"',
            price: "$1,299",
            image: "https://via.placeholder.com/150",
          },
          {
            title: 'Sony Bravia XR 75"',
            price: "$1,999",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Refrigerators",
        featured: [
          {
            title: "LG French Door Refrigerator",
            price: "$1,899",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Samsung Family Hub",
            price: "$2,499",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Whirlpool Side-by-Side",
            price: "$1,299",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    icon: <FaComputerMouse />,
    name: "Computer Accessories",
    subcategories: [
      {
        name: "Keyboards",
        featured: [
          {
            title: "Logitech MX Keys Wireless Keyboard",
            price: "$99",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Razer Huntsman Mini Gaming Keyboard",
            price: "$129",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Corsair K95 RGB Mechanical Keyboard",
            price: "$169",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Mice",
        featured: [
          {
            title: "Logitech MX Master 3S Wireless Mouse",
            price: "$99",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Razer DeathAdder V3 Pro",
            price: "$149",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "SteelSeries Rival 600 Gaming Mouse",
            price: "$79",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Monitors",
        featured: [
          {
            title: 'LG UltraGear 27" 4K Gaming Monitor',
            price: "$499",
            image: "https://via.placeholder.com/150",
          },
          {
            title: 'Dell UltraSharp 32" 4K Monitor',
            price: "$699",
            image: "https://via.placeholder.com/150",
          },
          {
            title: 'Samsung Odyssey G7 27" Curved Monitor',
            price: "$599",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "External Hard Drives",
        featured: [
          {
            title: "Western Digital 5TB My Passport",
            price: "$129",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Seagate 2TB Backup Plus Slim",
            price: "$69",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Samsung T7 1TB Portable SSD",
            price: "$139",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "USB Hubs",
        featured: [
          {
            title: "Anker 7-in-1 USB-C Hub",
            price: "$39",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Satechi Aluminum USB-C Multiport Adapter",
            price: "$69",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Belkin 4-Port USB 3.0 Hub",
            price: "$29",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    icon: <FaMobile />,
    name: "Mobile Accessories",
    subcategories: [
      {
        name: "Chargers",
        featured: [
          {
            title: "Anker 20W USB-C Fast Charger",
            price: "$19",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Apple 30W USB-C Power Adapter",
            price: "$49",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Samsung 25W Super Fast Charger",
            price: "$29",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Power Banks",
        featured: [
          {
            title: "Anker PowerCore 20000mAh Power Bank",
            price: "$49",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Xiaomi Mi 10000mAh Power Bank 3",
            price: "$29",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "RAVPower 26800mAh Portable Charger",
            price: "$69",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Phone Cases",
        featured: [
          {
            title: "Spigen Ultra Hybrid iPhone 14 Case",
            price: "$17",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "OtterBox Defender Series Galaxy S23 Case",
            price: "$49",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Ringke Fusion-X Shockproof Case for Pixel 7",
            price: "$21",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Screen Protectors",
        featured: [
          {
            title: "amFilm Tempered Glass Screen Protector for iPhone",
            price: "$9",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Spigen EZ Fit Screen Protector for Galaxy S22",
            price: "$14",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "ZAGG InvisibleShield Ultra Clear Pixel 7",
            price: "$24",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Cables & Adapters",
        featured: [
          {
            title: "Anker PowerLine+ USB-C to USB-C Cable (6ft)",
            price: "$15",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Apple Lightning to USB-C Cable (1m)",
            price: "$19",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "UGREEN USB-C to HDMI Adapter",
            price: "$22",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    icon: <FaCamera />,
    name: "Camera & Photo",
    subcategories: [
      {
        name: "DSLR Cameras",
        featured: [
          {
            title: "Canon EOS 90D DSLR Camera (Body Only)",
            price: "$1,199",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Nikon D7500 DSLR Camera with 18-140mm Lens",
            price: "$1,295",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Sony Alpha a77II DSLR Camera",
            price: "$1,198",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Mirrorless Cameras",
        featured: [
          {
            title: "Sony Alpha a7 III Mirrorless Camera (Body Only)",
            price: "$1,998",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Canon EOS R6 Mirrorless Camera",
            price: "$2,499",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Fujifilm X-T4 Mirrorless Camera",
            price: "$1,699",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Point & Shoot Cameras",
        featured: [
          {
            title: "Sony DSC-HX99 Compact Camera",
            price: "$448",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Canon PowerShot G7 X Mark III",
            price: "$749",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Panasonic Lumix ZS200 4K Digital Camera",
            price: "$697",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Action Cameras",
        featured: [
          {
            title: "GoPro HERO12 Black",
            price: "$399",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "DJI Osmo Action 3",
            price: "$329",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Insta360 ONE R Twin Edition",
            price: "$479",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Camera Lenses",
        featured: [
          {
            title: "Canon EF 50mm f/1.8 STM Lens",
            price: "$125",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Sony FE 24-70mm f/2.8 GM Lens",
            price: "$2,198",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Nikon AF-S NIKKOR 85mm f/1.8G Lens",
            price: "$496",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    icon: <IoWatch />,
    name: "Watches & Accessories",
    subcategories: [
      {
        name: "Smartwatches",
        featured: [
          {
            title: "Apple Watch Series 9 GPS 45mm",
            price: "$429",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Samsung Galaxy Watch 6 Classic",
            price: "$349",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Garmin Venu 2 Plus",
            price: "$449",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Analog Watches",
        featured: [
          {
            title: "Fossil Grant Chronograph Leather Watch",
            price: "$149",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Seiko Men's SNK809 Automatic Watch",
            price: "$89",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Citizen Eco-Drive Chandler Field Watch",
            price: "$189",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Digital Watches",
        featured: [
          {
            title: "Casio G-Shock GA100 Military Series",
            price: "$99",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Timex Ironman Classic 30",
            price: "$42",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Garmin Instinct Rugged GPS Watch",
            price: "$249",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Watch Straps",
        featured: [
          {
            title: "Apple Sport Loop for Apple Watch",
            price: "$49",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Milanese Loop Band for Galaxy Watch",
            price: "$22",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Leather Watch Band for Garmin",
            price: "$29",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Luxury Watches",
        featured: [
          {
            title: "Rolex Submariner Automatic Watch",
            price: "$12,500",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Omega Speedmaster Moonwatch",
            price: "$6,300",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "TAG Heuer Carrera Chronograph",
            price: "$4,200",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    icon: <FaMobile />,
    name: "Wearable Technology",
    subcategories: [
      {
        name: "Smartwatches",
        featured: [
          {
            title: "Apple Watch Ultra 2",
            price: "$799",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Samsung Galaxy Watch 5 Pro",
            price: "$449",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Fitbit Sense 2",
            price: "$299",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Fitness Trackers",
        featured: [
          {
            title: "Fitbit Charge 5",
            price: "$149",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Xiaomi Mi Band 7",
            price: "$59",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Garmin Vivosmart 5",
            price: "$149",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "VR Headsets",
        featured: [
          {
            title: "Meta Quest 3 VR Headset",
            price: "$499",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "HTC Vive Pro 2",
            price: "$799",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Sony PlayStation VR2",
            price: "$549",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Smart Glasses",
        featured: [
          {
            title: "Ray-Ban Meta Smart Glasses",
            price: "$299",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Vuzix Blade Upgraded AR Smart Glasses",
            price: "$899",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Amazon Echo Frames",
            price: "$249",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        name: "Smart Rings",
        featured: [
          {
            title: "Oura Ring Gen 3",
            price: "$299",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Circular Smart Ring",
            price: "$259",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Go2Sleep Smart Ring",
            price: "$199",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
];

// const categories = [
//   {
//     icon: <FaComputer />,
//     name: "Computer & Laptops",
//     subcategories: [
//       "Laptops",
//       "Desktops",
//       "Gaming Laptops",
//       "MacBooks",
//       "Chromebooks",
//     ],
//   },
//   {
//     icon: <FaComputerMouse />,
//     name: "Computer Accessories",
//     subcategories: [
//       "Keyboards",
//       "Mice",
//       "Monitors",
//       "External Hard Drives",
//       "USB Hubs",
//     ],
//   },
//   {
//     icon: <FaMobile />,
//     name: "SmartPhone",
//     subcategories: [
//       "iPhone",
//       "Samsung",
//       "Xiaomi",
//       "Oppo",
//       "OnePlus",
//       "Realme",
//       "Vivo",
//       "Huawei",
//     ],
//   },
//   {
//     icon: <FaHeadphones />,
//     name: "Headphone",
//     subcategories: [
//       "Wireless Headphones",
//       "Wired Headphones",
//       "Noise Cancelling",
//       "Earbuds",
//       "Gaming Headsets",
//     ],
//   },
//   {
//     icon: <FaMobile />,
//     name: "Mobile Accessories",
//     subcategories: [
//       "Chargers",
//       "Power Banks",
//       "Phone Cases",
//       "Screen Protectors",
//       "Cables & Adapters",
//     ],
//   },
//   {
//     icon: <FaGamepad />,
//     name: "Gaming Consoles",
//     subcategories: [
//       "PlayStation",
//       "Xbox",
//       "Nintendo Switch",
//       "Gaming Controllers",
//       "VR Headsets",
//     ],
//   },
//   {
//     icon: <FaCamera />,
//     name: "Camera & Photo",
//     subcategories: [
//       "DSLR Cameras",
//       "Mirrorless Cameras",
//       "Point & Shoot Cameras",
//       "Action Cameras",
//       "Camera Lenses",
//     ],
//   },
//   {
//     icon: <FaTv />,
//     name: "TV & Home Appliance",
//     subcategories: [
//       "Smart TVs",
//       "LED TVs",
//       "Refrigerators",
//       "Air Conditioners",
//       "Microwaves",
//     ],
//   },
//   {
//     icon: <IoWatch />,
//     name: "Watches & Accessories",
//     subcategories: [
//       "Smartwatches",
//       "Analog Watches",
//       "Digital Watches",
//       "Watch Straps",
//       "Luxury Watches",
//     ],
//   },
//   {
//     icon: <FaMobile />,
//     name: "Wearable Technology",
//     subcategories: [
//       "Smartwatches",
//       "Fitness Trackers",
//       "VR Headsets",
//       "Smart Glasses",
//       "Smart Rings",
//     ],
//   },
// ];

interface FeatProps {
  title: string;
  price: string;
  image: string;
}
const CategoryNav = () => {
  const [isHovered, setIsHovered] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isSubCategory, setIsSubCategory] = useState<string | null>(null);

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
                <ul className="absolute flex flex-col py-4 left-full top-0 bg-white shadow-lg w-[300px] px-4 rounded-md">
                  {item.subcategories.map((sub, subIndex) => (
                    <Link
                      to={`${activeCategory}/${sub}`}
                      key={subIndex}
                      className={`${
                        activeCategory ? "hover:bg-gray-100" : ""
                      } py-1  text-sm px-2`}
                    >
                      <div className="flex flex-row justify-between w-full">
                        <li onMouseOver={() => setIsSubCategory(sub.name)}>
                          {sub.name}
                        </li>
                        {isSubCategory === sub.name && (
                          <ul className="bg-teal-700 flex flex-col gap-4">
                            <h3 className="font">
                              FEATURED {sub.name.toUpperCase()}
                            </h3>
                            {sub.featured.map((feat: FeatProps, featIndex) => (
                              <div key={featIndex} className="border">
                                <p>{feat.title}</p>
                                <p>{feat.price}</p>
                                <img src={feat.image} alt={feat.title} />
                              </div>
                            ))}
                          </ul>
                        )}
                      </div>
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
