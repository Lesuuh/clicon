import { ArrowDownUp, ListFilter } from "lucide-react";
import { Separator } from "../ui/separator";

interface FilteringButtonsProps {
  setOpenDrawer: (open: boolean) => void;
  setOpenFilter: (open: boolean) => void;
}

const FilteringButtons: React.FC<FilteringButtonsProps> = ({
  setOpenDrawer,
  setOpenFilter,
}) => {
  return (
    <div className="fixed text-[.7rem] flex items-center bottom-10 z-40 left-1/2 transform -translate-x-1/2 px-4 rounded-4xl bg-black text-white h-10 py-2">
      <div className="flex items-center ">
        <p className="mr-1" onClick={() => setOpenDrawer(true)}>
          Sort by
        </p>
        <ArrowDownUp size={15} />
      </div>
      <Separator
        orientation="vertical"
        className="h-[80%] mx-2 w-[1px] border border-gray-50"
      />
      <div className="flex items-center" onClick={() => setOpenFilter(true)}>
        <p className="mr-1">Filters</p> <ListFilter size={15} />
      </div>
    </div>
  );
};

export default FilteringButtons;
