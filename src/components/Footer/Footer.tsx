import { Separator } from "@/components/ui/separator";
import { CategoriesTypes } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const fetchCategories = async () => {
  const response = await fetch("http://localhost:8000/categories");
  const data = await response.json();
  return data;
};

const quickLinks = [
  { name: "Shop Product", to: "/products" },
  { name: "Shopping Cart", to: "/cart" },
  { name: "Wishlist", to: "/wishlist" },
  { name: "Track Order", to: "/track-order" },
  { name: "Customer Help", to: "customer-help" },
  { name: "About Us", to: "/about-us" },
];

const Footer = () => {
  const { data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (error) {
    return <p>{error.message}</p>;
  }

  const categories = data?.slice(0, 6);
  return (
    <div className="w-full bg-black pt-10 text-white">
      <div className="px-4 md:px-20 max-w-[1400px] mx-auto mb-5">
        <div className="top grid grid-cols-2  md:grid-cols-4 gap-4">
          <div>
            <img
              src="/public/icons/Logo.png"
              alt="clicon-logo"
              className="w-20 md:w-30"
            />
            <p className="text-[0.7rem] py-[1px] text-gray-400 mt-2">
              Customer Support:
            </p>
            <p className="text-[0.8rem] py-[1px] text-gray-200 mt-2">
              (629) 555-0129
            </p>
            <p className="text-[0.8rem] py-[1px] text-gray-200 mt-2">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <p className="text-[0.8rem] py-[1px] text-gray-200 mt-2">
              lesuuh@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-sm mb-2">TOP CATEGORY</h3>
            <ul>
              {categories?.map((cat: CategoriesTypes) => (
                <Link to={`/products/${cat.slug}`} key={cat.id}>
                  <li className="text-[0.7rem] py-1 text-gray-400 hover:text-warning">
                    {cat.name}
                  </li>
                </Link>
              ))}
              <Link to="/products">
                <p className="text-[0.7rem] py-1 text-gray-400 hover:text-warning flex items-center">
                  Browse all Products
                  <ArrowRight size={17} className="ml-1" />
                </p>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-sm mb-2">QUICK LINKS</h3>
            <ul>
              {quickLinks?.map((link) => (
                <Link to={`/products/${link.to}`} key={link.name}>
                  <li className="text-[0.7rem] py-1 text-gray-400 hover:text-warning">
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm mb-2">DOWNLOAD APP</h3>
            <div className="flex items-start md:flex-col gap-2 md:gap-0">
              <div className="md:px-4 md:py-4 md:w-[150px] flex md:bg-[#303639] text-white ">
                <img
                  src="/public/icons/Icon=google-play 1.svg"
                  alt=""
                  className="w-8 md:w-10"
                />
                <div className="ml-2 hidden md:block">
                  <p className="text-[.7rem] font-normal">Get it now</p>
                  <p className="text-[.8rem] font-bold">Google Play</p>
                </div>
              </div>
              <div className="md:px-4 md:py-4 md:w-[150px] flex md:bg-[#303639] text-white md:mt-2">
                <img
                  src="/public/icons/Apple---Negative 1.svg"
                  alt=""
                  className="w-8 md:w-10"
                />
                <div className=" ml-2 hidden md:block">
                  <p className="text-[.7rem] font-normal">Get it now</p>
                  <p className="text-[.8rem] font-bold">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Separator outside the padded container */}
      <Separator className="w-full border-t border-gray-800" />
      <div className="px-4 md:px-20 max-w-[1400px] mx-auto">
        <p className="text-[.6rem] text-center font-medium text-gray-300 py-2 md:py-5">
          Kinbo - eCommerce Template © 2021. Design by Templatecookie and
          developed by{" "}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
            <span className="relative text-white dark:text-gray-950">
              {"<Lesuuh Ueh-Kabari/>"}
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
