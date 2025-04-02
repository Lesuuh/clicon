import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import { Separator } from "../ui/separator";

interface SortingDrawerProps {
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
}

const SortingDrawer = ({ openDrawer, setOpenDrawer }: SortingDrawerProps) => {
  return (
    <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
      <DrawerContent className="bg-white">
        <DrawerHeader>
          <DrawerTitle className="flex items-center">
            Sort by{" "}
            <X className="ml-auto" onClick={() => setOpenDrawer(false)} />
          </DrawerTitle>
          <Separator className="w-full mt-1 border-t border-gray-300" />
          <DrawerDescription>
            <div className="flex flex-col w-full my-5 space-y-5">
              <label htmlFor="popular" className="flex items-center w-full">
                Most Popular
                <input
                  type="radio"
                  name="sort"
                  id="popular"
                  className="ml-auto sr-only peer"
                />
                <div className="w-4 h-4 ml-auto bg-white border-gray-400 border-2 rounded-full peer-checked:border-primary peer-checked:bg-primary "></div>
              </label>
              <label htmlFor="high" className="flex items-center w-full">
                Prices: High to Low
                <input
                  type="radio"
                  name="sort"
                  id="high"
                  className="sr-only peer"
                />
                <div className="w-4 h-4 ml-auto bg-white border-gray-400 border-2 rounded-full peer-checked:border-primary peer-checked:bg-primary "></div>
              </label>
              <label htmlFor="low" className="flex items-center w-full">
                Prices: Low to High
                <input
                  type="radio"
                  name="sort"
                  id="low"
                  className="sr-only peer"
                />
                <div className="w-4 h-4 ml-auto bg-white border-gray-400 border-2 rounded-full peer-checked:border-primary peer-checked:bg-primary "></div>
              </label>
            </div>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default SortingDrawer;
