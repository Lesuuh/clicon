// import { CategoryNavigation } from "./CategoryNavigation";
import CategoryNav from "./CategoryNav";


const BottomNav = () => {
  return (
    <div className="hidden md:flex w-full py-[20px] px-4 md:px-10 lg:px-40">
      <div className=" w-full flex flex-row justify-between">
        <div className="flex items-center gap-4">
          {/* <CategoryMenu /> */}
          <CategoryNav />
          {/* <CategoryNavigation /> */}
          <p>Track orders</p>
          <p>Customer Support</p>
          <p>Need help</p>
        </div>

        <p>+234-906-725-2273</p>
      </div>
      <hr className="text-[var(--gray)]" />
    </div>
  );
};

export default BottomNav;
