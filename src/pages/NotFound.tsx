const NotFound = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <h2 className="text-center">{message}</h2>
      <img
        src="/public//images/Oops! 404 Error with a broken robot-rafiki (1) 1.png"
        alt=""
      />
    </div>
  );
};

export default NotFound;
