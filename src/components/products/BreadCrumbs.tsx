import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router";
import { HomeIcon } from "../icons/HomeIcon";
import { ChevronRight } from "lucide-react";

const BreadCrumbs = () => {
  return (
    <div className="bg-gray-50 max-w-[1400px]  py-3 mb-5 gap-4 px-4 md:px-20 w-full mx-auto">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/" className="flex items-end text-gray text-[.7rem]">
              <HomeIcon className="text-gray w-3 mr-1" />
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight absoluteStrokeWidth className="text-gray w-2" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <Link to="/shop" className="text-gray  text-[.7rem]">
              Shop
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbs;
