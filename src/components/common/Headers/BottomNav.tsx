const BottomNav = () => {
  return (
    <div
      className={`hidden md:flex justify-between items-center py-[20px] px-4 md:px-10 lg:px-40`}
    >
      <div className="flex items-center gap-4">
        <p>All categories</p>
        <p>Track orders</p>
        <p>Customer Support</p>
        <p>Need help</p>
      </div>
      <p>+234-906-725-2273</p>
    </div>
  );
};

export default BottomNav;
