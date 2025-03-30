import { BlogsType } from "@/lib/types";
import { formatDate, truncateText } from "@/lib/utils";
import { ArrowRight, Calendar, UserCircle2 } from "lucide-react";
import { FaCommentDots } from "react-icons/fa6";
import { Button } from "../ui/button";

const BlogCard = ({ blog }: { blog: BlogsType }) => {
  const { comments, content, date, image, name, title } = blog;
  return (
    <div className="shadow-xl rounded-sm p-4 bg-white">
      <img src={image} alt={title} />
      <div className="flex flex-row justify-start mt-5">
        <div className="flex items-center">
          <UserCircle2 className="text-primary w-8" />
          <p className="text-[.8rem] text-gray-700">{name}</p>
        </div>
        <div className="flex items-center">
          <Calendar className="text-primary w-8" />
          <p className="text-[.8rem] text-gray-700">{formatDate(date)}</p>
        </div>
        <div className="flex items-center">
          <FaCommentDots className="text-primary w-8" />
          <p className="text-[.8rem] text-gray-700">{comments}</p>
        </div>
      </div>
      <h2 className="mt-3 font-bold text-xl">{title}</h2>
      <p className="text-gray-700 mt-2 text-[.8rem] font-light">
        {" "}
        {truncateText(content, 120)}
      </p>
      <Button className="bg-white hover:text-white border-primary outline border text-primary rounded-sm mt-3 text-xs">
        READ MORE
        <ArrowRight />
      </Button>
    </div>
  );
};

export default BlogCard;
