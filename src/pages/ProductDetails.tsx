import ClipLoaderSpinner from "@/components/icons/ClipLoaderSpinner";
import { Separator } from "@/components/ui/separator";
import { ProductTypes } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router";

const fetchProducts = async (id: string) => {
  const response = await fetch(`http://localhost:8000/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProducts(id as string),
    enabled: !!id,
  });
  const product: ProductTypes = data;

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center my-10">
        <ClipLoaderSpinner />
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full flex justify-center items-center my-10">
        <p className="text-red-500">
          Failed to load product details. Please try again later.
        </p>
      </div>
    );
  }
  return (
    <section className="my-10 mx-auto w-full max-w-[1400px] px-5 md:px-20">
      <div className="w-full flex flex-col md:flex-row gap-4">
        {/* Image Section */}
        <div className="flex-1 border flex items-center justify-center border-gray-200">
          <img
            src={product.images[0]}
            alt={product.name}
            className="object-contain"
          />
        </div>

        {/* Product Details Section */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <FaStar className="text-primary" size={13} />
            <FaStar className="text-primary" size={13} />
            <FaStar className="text-primary" size={13} />
            <FaStar className="text-primary" size={13} />
            <FaStar className="text-primary" size={13} />
            <p className="text-[.7rem] font-semibold">
              {product.rating} star rating
            </p>
            <p className="text-[.7rem] text-gray">12,161 User feedbacks</p>
          </div>
          <h2>{product.description}</h2>
          <div className="text-[.7rem] text-gray flex items-center w-full justify-between">
            <div className="flex flex-col gap-2">
              <p>
                Sku: <span className="text-black font-semibold"> A264671</span>
              </p>
              <p>
                Brand:{" "}
                <span className="text-black font-semibold">
                  {product.brand}
                </span>
              </p>
            </div>
            <div>
              <p>
                Availability:{" "}
                <span className="text-black font-semibold">
                  {product.stock > 0 ? (
                    <span className="text-green-500">In Stock</span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </span>
              </p>
              <p>
                Category:{" "}
                <span className="text-black font-semibold">
                  {product.category.name}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 my-5">
            <p className="text-secondary-500 font-semibold text-base">
              ${product.price}
            </p>
            <del className="text-gray">${product.price}</del>
            <p className="px-1.5 py-1 bg-warning font-semibold rounded-xs text-[.8rem]">
              21% OFF
            </p>
          </div>
          <Separator className="w-full my-5 border-t border-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
