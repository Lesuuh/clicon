import { ArrowRight } from "lucide-react";
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
import { RxCaretUp, RxCaretDown } from "react-icons/rx";

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
            image: "/images/02.png",
          },
          {
            title: "Dell XPS 13",
            price: "$1,299",
            image: "/images/02.png",
          },
          {
            title: "HP Spectre x360",
            price: "$1,199",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Desktops",
        featured: [
          {
            title: "iMac 24-inch M1",
            price: "$1,299",
            image: "/images/02.png",
          },
          {
            title: "HP Pavilion Gaming Desktop",
            price: "$899",
            image: "/images/02.png",
          },
          {
            title: "Dell Inspiron Desktop",
            price: "$799",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Gaming Laptops",
        featured: [
          {
            title: "Asus ROG Zephyrus G15",
            price: "$1,799",
            image: "/images/02.png",
          },
          {
            title: "Alienware m15 R6",
            price: "$2,099",
            image: "/images/02.png",
          },
          {
            title: "Lenovo Legion 5 Pro",
            price: "$1,599",
            image: "/images/02.png",
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
            image: "/images/02.png",
          },
          {
            title: "iPhone 13 Mini",
            price: "$699",
            image: "/images/02.png",
          },
          {
            title: "iPhone SE (2022)",
            price: "$429",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Samsung",
        featured: [
          {
            title: "Samsung Galaxy S23 Ultra",
            price: "$1,199",
            image: "/images/02.png",
          },
          {
            title: "Samsung Galaxy Z Fold 4",
            price: "$1,799",
            image: "/images/02.png",
          },
          {
            title: "Samsung Galaxy A53 5G",
            price: "$449",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Xiaomi",
        featured: [
          {
            title: "Xiaomi 13 Pro",
            price: "$999",
            image: "/images/02.png",
          },
          {
            title: "Xiaomi Redmi Note 12",
            price: "$299",
            image: "/images/02.png",
          },
          {
            title: "Xiaomi Mi 11 Ultra",
            price: "$1,199",
            image: "/images/02.png",
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
            image: "/images/02.png",
          },
          {
            title: "PlayStation 4 Pro",
            price: "$399",
            image: "/images/02.png",
          },
          {
            title: "PlayStation VR2",
            price: "$549",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Xbox",
        featured: [
          {
            title: "Xbox Series X",
            price: "$499",
            image: "/images/02.png",
          },
          {
            title: "Xbox Series S",
            price: "$299",
            image: "/images/02.png",
          },
          {
            title: "Xbox Elite Controller",
            price: "$179",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Nintendo Switch",
        featured: [
          {
            title: "Nintendo Switch OLED",
            price: "$349",
            image: "/images/02.png",
          },
          {
            title: "Nintendo Switch Lite",
            price: "$199",
            image: "/images/02.png",
          },
          {
            title: "Nintendo Switch Pro Controller",
            price: "$69",
            image: "/images/02.png",
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
            image: "/images/02.png",
          },
          {
            title: "Bose QuietComfort 45",
            price: "$329",
            image: "/images/02.png",
          },
          {
            title: "Apple AirPods Max",
            price: "$549",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Earbuds",
        featured: [
          {
            title: "Apple AirPods Pro 2",
            price: "$249",
            image: "/images/02.png",
          },
          {
            title: "Samsung Galaxy Buds 2 Pro",
            price: "$229",
            image: "/images/02.png",
          },
          {
            title: "Sony WF-1000XM4",
            price: "$279",
            image: "/images/02.png",
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
            image: "/images/02.png",
          },
          {
            title: 'LG OLED C2 55"',
            price: "$1,299",
            image: "/images/02.png",
          },
          {
            title: 'Sony Bravia XR 75"',
            price: "$1,999",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Refrigerators",
        featured: [
          {
            title: "LG French Door Refrigerator",
            price: "$1,899",
            image: "/images/02.png",
          },
          {
            title: "Samsung Family Hub",
            price: "$2,499",
            image: "/images/02.png",
          },
          {
            title: "Whirlpool Side-by-Side",
            price: "$1,299",
            image: "/images/02.png",
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
            image: "/images/02.png",
          },
          {
            title: "Razer Huntsman Mini Gaming Keyboard",
            price: "$129",
            image: "/images/02.png",
          },
          {
            title: "Corsair K95 RGB Mechanical Keyboard",
            price: "$169",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Mice",
        featured: [
          {
            title: "Logitech MX Master 3S Wireless Mouse",
            price: "$99",
            image: "/images/02.png",
          },
          {
            title: "Razer DeathAdder V3 Pro",
            price: "$149",
            image: "/images/02.png",
          },
          {
            title: "SteelSeries Rival 600 Gaming Mouse",
            price: "$79",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Monitors",
        featured: [
          {
            title: 'LG UltraGear 27" 4K Gaming Monitor',
            price: "$499",
            image: "/images/02.png",
          },
          {
            title: 'Dell UltraSharp 32" 4K Monitor',
            price: "$699",
            image: "/images/02.png",
          },
          {
            title: 'Samsung Odyssey G7 27" Curved Monitor',
            price: "$599",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "External Hard Drives",
        featured: [
          {
            title: "Western Digital 5TB My Passport",
            price: "$129",
            image: "/images/02.png",
          },
          {
            title: "Seagate 2TB Backup Plus Slim",
            price: "$69",
            image: "/images/02.png",
          },
          {
            title: "Samsung T7 1TB Portable SSD",
            price: "$139",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "USB Hubs",
        featured: [
          {
            title: "Anker 7-in-1 USB-C Hub",
            price: "$39",
            image: "/images/02.png",
          },
          {
            title: "Satechi Aluminum USB-C Multiport Adapter",
            price: "$69",
            image: "/images/02.png",
          },
          {
            title: "Belkin 4-Port USB 3.0 Hub",
            price: "$29",
            image: "/images/02.png",
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
            image: "/images/02.png",
          },
          {
            title: "Apple 30W USB-C Power Adapter",
            price: "$49",
            image: "/images/02.png",
          },
          {
            title: "Samsung 25W Super Fast Charger",
            price: "$29",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Power Banks",
        featured: [
          {
            title: "Anker PowerCore 20000mAh Power Bank",
            price: "$49",
            image: "/images/02.png",
          },
          {
            title: "Xiaomi Mi 10000mAh Power Bank 3",
            price: "$29",
            image: "/images/02.png",
          },
          {
            title: "RAVPower 26800mAh Portable Charger",
            price: "$69",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Phone Cases",
        featured: [
          {
            title: "Spigen Ultra Hybrid iPhone 14 Case",
            price: "$17",
            image: "/images/02.png",
          },
          {
            title: "OtterBox Defender Series Galaxy S23 Case",
            price: "$49",
            image: "/images/02.png",
          },
          {
            title: "Ringke Fusion-X Shockproof Case for Pixel 7",
            price: "$21",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Screen Protectors",
        featured: [
          {
            title: "amFilm Tempered Glass Screen Protector for iPhone",
            price: "$9",
            image: "/images/02.png",
          },
          {
            title: "Spigen EZ Fit Screen Protector for Galaxy S22",
            price: "$14",
            image: "/images/02.png",
          },
          {
            title: "ZAGG InvisibleShield Ultra Clear Pixel 7",
            price: "$24",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Cables & Adapters",
        featured: [
          {
            title: "Anker PowerLine+ USB-C to USB-C Cable (6ft)",
            price: "$15",
            image: "/images/02.png",
          },
          {
            title: "Apple Lightning to USB-C Cable (1m)",
            price: "$19",
            image: "/images/02.png",
          },
          {
            title: "UGREEN USB-C to HDMI Adapter",
            price: "$22",
            image: "/images/02.png",
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
            image: "/images/02.png",
          },
          {
            title: "Nikon D7500 DSLR Camera with 18-140mm Lens",
            price: "$1,295",
            image: "/images/02.png",
          },
          {
            title: "Sony Alpha a77II DSLR Camera",
            price: "$1,198",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Mirrorless Cameras",
        featured: [
          {
            title: "Sony Alpha a7 III Mirrorless Camera (Body Only)",
            price: "$1,998",
            image: "/images/02.png",
          },
          {
            title: "Canon EOS R6 Mirrorless Camera",
            price: "$2,499",
            image: "/images/02.png",
          },
          {
            title: "Fujifilm X-T4 Mirrorless Camera",
            price: "$1,699",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Point & Shoot Cameras",
        featured: [
          {
            title: "Sony DSC-HX99 Compact Camera",
            price: "$448",
            image: "/images/02.png",
          },
          {
            title: "Canon PowerShot G7 X Mark III",
            price: "$749",
            image: "/images/02.png",
          },
          {
            title: "Panasonic Lumix ZS200 4K Digital Camera",
            price: "$697",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Action Cameras",
        featured: [
          {
            title: "GoPro HERO12 Black",
            price: "$399",
            image: "/images/02.png",
          },
          {
            title: "DJI Osmo Action 3",
            price: "$329",
            image: "/images/02.png",
          },
          {
            title: "Insta360 ONE R Twin Edition",
            price: "$479",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Camera Lenses",
        featured: [
          {
            title: "Canon EF 50mm f/1.8 STM Lens",
            price: "$125",
            image: "/images/02.png",
          },
          {
            title: "Sony FE 24-70mm f/2.8 GM Lens",
            price: "$2,198",
            image: "/images/02.png",
          },
          {
            title: "Nikon AF-S NIKKOR 85mm f/1.8G Lens",
            price: "$496",
            image: "/images/02.png",
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
            image: "/images/02.png",
          },
          {
            title: "Samsung Galaxy Watch 6 Classic",
            price: "$349",
            image: "/images/02.png",
          },
          {
            title: "Garmin Venu 2 Plus",
            price: "$449",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Analog Watches",
        featured: [
          {
            title: "Fossil Grant Chronograph Leather Watch",
            price: "$149",
            image: "/images/02.png",
          },
          {
            title: "Seiko Men's SNK809 Automatic Watch",
            price: "$89",
            image: "/images/02.png",
          },
          {
            title: "Citizen Eco-Drive Chandler Field Watch",
            price: "$189",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Digital Watches",
        featured: [
          {
            title: "Casio G-Shock GA100 Military Series",
            price: "$99",
            image: "/images/02.png",
          },
          {
            title: "Timex Ironman Classic 30",
            price: "$42",
            image: "/images/02.png",
          },
          {
            title: "Garmin Instinct Rugged GPS Watch",
            price: "$249",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Watch Straps",
        featured: [
          {
            title: "Apple Sport Loop for Apple Watch",
            price: "$49",
            image: "/images/02.png",
          },
          {
            title: "Milanese Loop Band for Galaxy Watch",
            price: "$22",
            image: "/images/02.png",
          },
          {
            title: "Leather Watch Band for Garmin",
            price: "$29",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Luxury Watches",
        featured: [
          {
            title: "Rolex Submariner Automatic Watch",
            price: "$12,500",
            image: "/images/02.png",
          },
          {
            title: "Omega Speedmaster Moonwatch",
            price: "$6,300",
            image: "/images/02.png",
          },
          {
            title: "TAG Heuer Carrera Chronograph",
            price: "$4,200",
            image: "/images/02.png",
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
            image: "/images/02.png",
          },
          {
            title: "Samsung Galaxy Watch 5 Pro",
            price: "$449",
            image: "/images/02.png",
          },
          {
            title: "Fitbit Sense 2",
            price: "$299",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Fitness Trackers",
        featured: [
          {
            title: "Fitbit Charge 5",
            price: "$149",
            image: "/images/02.png",
          },
          {
            title: "Xiaomi Mi Band 7",
            price: "$59",
            image: "/images/02.png",
          },
          {
            title: "Garmin Vivosmart 5",
            price: "$149",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "VR Headsets",
        featured: [
          {
            title: "Meta Quest 3 VR Headset",
            price: "$499",
            image: "/images/02.png",
          },
          {
            title: "HTC Vive Pro 2",
            price: "$799",
            image: "/images/02.png",
          },
          {
            title: "Sony PlayStation VR2",
            price: "$549",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Smart Glasses",
        featured: [
          {
            title: "Ray-Ban Meta Smart Glasses",
            price: "$299",
            image: "/images/02.png",
          },
          {
            title: "Vuzix Blade Upgraded AR Smart Glasses",
            price: "$899",
            image: "/images/02.png",
          },
          {
            title: "Amazon Echo Frames",
            price: "$249",
            image: "/images/02.png",
          },
        ],
      },
      {
        name: "Smart Rings",
        featured: [
          {
            title: "Oura Ring Gen 3",
            price: "$299",
            image: "/images/02.png",
          },
          {
            title: "Circular Smart Ring",
            price: "$259",
            image: "/images/02.png",
          },
          {
            title: "Go2Sleep Smart Ring",
            price: "$199",
            image: "/images/02.png",
          },
        ],
      },
    ],
  },
];

const CategoryNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(
    "Computer & Laptops"
  );
  const [isSubCategory, setIsSubCategory] = useState<string | null>("Laptops");

  let hoverTimeout: NodeJS.Timeout | null = null;
  return (
    <div className="relative">
      <button
        className={`${
          isHovered ? "bg-primary text-white" : "  bg-gray-50 text-gray-900"
        }  flex items-center px-[24px] py-2 rounded-[2px] transition ease-in-out duration-100 text-[.7rem]`}
        onMouseEnter={() => {
          hoverTimeout = setTimeout(() => {
            setIsHovered(true);
          }, 300);
        }}
        onMouseLeave={() => {
          if (hoverTimeout) clearTimeout(hoverTimeout);
        }}
      >
        All categories
        {isHovered ? (
          <RxCaretUp size={25} className="ml-1" />
        ) : (
          <RxCaretDown size={25} className="ml-1" />
        )}
      </button>

      {isHovered && (
        <div className="z-50 bg-white relative">
          {/* first-step */}
          <ul
            className="absolute flex flex-col py-4 bg-white shadow-lg mt-2 w-50 h-auto px-4 "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {categories.map((item, index) => (
              <li
                key={index}
                className={`${
                  activeCategory ? "hover:bg-gray-100" : ""
                } py-1 text-[.7rem] text-gray px-2`}
                onMouseEnter={() => setActiveCategory(item.name)}
              >
                {item.name}

                {activeCategory === item.name && (
                  <ul className="absolute flex flex-col min-h-full py-4 left-full top-0 bg-white w-50  ">
                    {item.subcategories.map((sub, subIndex) => (
                      <div
                        key={subIndex}
                        className="w-full flex justify-between items-center"
                        onMouseOver={() => setIsSubCategory(sub.name)}
                        onMouseLeave={() => setIsSubCategory(null)}
                      >
                        <Link
                          to={`${activeCategory}/${sub.name}`}
                          className="w-full"
                        >
                          <li
                            className={`py-2 px-4 w-full ${
                              isSubCategory === sub.name ? "bg-gray-100" : ""
                            } hover:bg-gray-100 cursor-pointer`}
                          >
                            {sub.name}
                          </li>
                        </Link>
                        {isSubCategory === sub.name && (
                          <ul className=" w-auto absolute left-full top-0 bg-white  min-h-full p-4 ">
                            <div className="flex gap-4 items-start w-full">
                              <div>
                                <h3 className="font-semibold text-[.8rem] mb-2">
                                  FEATURED {sub.name.toUpperCase()}
                                </h3>
                                {sub.featured.map((feat, featIndex) => (
                                  <Link to={"/#"} key={featIndex}>
                                    <li className="hover:bg-gray-100 flex items-center mb-2 py-2 border px-2 border-gray-200">
                                      <img
                                        src={feat.image}
                                        alt={feat.title}
                                        className="w-20 h-12 mr-4"
                                      />
                                      <div className="space-y-1">
                                        <p className="font-medium text-xs">
                                          {feat.title}
                                        </p>
                                        <p className="text-xs font-semibold text-secondary">
                                          {feat.price}
                                        </p>
                                      </div>
                                    </li>
                                  </Link>
                                ))}
                              </div>
                              <div className="bg-warning w-[400px] p-5 flex flex-col items-center justify-center gap-1">
                                <img
                                  src="/images/03.png"
                                  alt=""
                                  className="bg-transparent"
                                />
                                <h3 className="font-bold text-xl">
                                  21% Discount
                                </h3>
                                <p className="text-gray-700 text-[.7rem]">
                                  Escape the noise, it's time to head the magin
                                  with Xiami Earbuds
                                </p>
                                <p className="text-xs text-gray-700">
                                  Starting price:{" "}
                                  <span className="text-base font-semibold bg-white px-2 py-1">
                                    $99 USD
                                  </span>
                                </p>
                                <button className="bg-primary cursor-pointer hover:bg-amber-600 flex items-center justify-center text-white w-full py-2 mt-2">
                                  Shop Now <ArrowRight />
                                </button>
                              </div>
                            </div>
                          </ul>
                        )}
                      </div>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryNav;
