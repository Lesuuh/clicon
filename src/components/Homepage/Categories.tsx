import { Link } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useQuery } from "@tanstack/react-query";
import { ScaleLoader } from "react-spinners";
import NotFound from "@/pages/NotFound";
import { CategoriesTypes } from "@/lib/types";

const fetchCategories = async (): Promise<CategoriesTypes[]> => {
  const response = await fetch("http://localhost:8000/categories");
  const data = await response.json();
  return data;
};

const Categories = () => {
  // categories
  // const categories = [
  //   { name: "Computer & Laptops", image: "/public/images/Image (6).png" },
  //   { name: "Computer Accessories", image: "/public/images/Image (8).png" },
  //   { name: "SmartPhone", image: "/public/images/Image (7).png" },
  //   { name: "Headphone", image: "/public/images/Image (13).png" },
  //   { name: "Mobile Accessories", image: "/public/images/Image (17).png" },
  //   { name: "Gaming Consoles", image: "/public/images/Image-1.png" },
  //   { name: "Camera & Photo", image: "/public/images/Image (9).png" },
  //   { name: "TV & Home Appliance", image: "/public/images/tv.png" },
  //   { name: "Watches & Accessories", image: "/public/images/Image (3).png" },
  //   { name: "Wearable Technology", image: "/public/images/Image 4.png" },
  // ];

  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) {
    return (
      <ScaleLoader
        color="text-primary"
        loading={isLoading}
        // cssOverride={override}
        height={15}
        width={5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  if (error) {
    return <NotFound message={error.message} />;
  }
  return (
    <section className="my-10">
      <h2 className="text-center text-xl font-bold mb-4">
        Shop with Categories
      </h2>
      <Carousel className="relative px-4 md:px-10 ">
        <CarouselContent className="flex gap-2 items-stretch">
          {data?.map((category) => (
            <CarouselItem
              key={category.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex-shrink-0"
            >
              <Link to={`/products/${category.name}`}>
                <li className="border border-gray-200 flex flex-col items-center justify-center w-full p-4 rounded-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-24 h-24 object-contain mb-2"
                  />
                  <p className="text-sm font-medium text-gray-700">
                    {category.name}
                  </p>
                </li>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100  text-gray-700 hover:bg-primary hover:text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all duration-300">
          &lt;
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100  text-gray-700 hover:bg-primary hover:text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all duration-300">
          &gt;
        </CarouselNext>
      </Carousel>
    </section>
  );
};

export default Categories;
