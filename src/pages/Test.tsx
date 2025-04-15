import ClipLoaderSpinner from "@/components/icons/ClipLoaderSpinner";
import { fetchProducts } from "@/services/productsService";
import { useQuery } from "@tanstack/react-query";

const Test = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  console.log(products);
  const image = products?.map((item) => item.images[0]);

  if (isLoading) {
    return <ClipLoaderSpinner />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      {products?.map((item) => (
        <div>
          <p>{item.id}</p>
          {item.images?.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`product-${item.id}-${idx}`}
              className="w-40 h-auto"
            />
          ))}
          <p>{item?.brand}</p>
          <img src={image[0]} alt="" />
          <p>{item?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Test;
