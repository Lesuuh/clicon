import CartIcon from "@/components/icons/CartIcon";
import ClipLoaderSpinner from "@/components/icons/ClipLoaderSpinner";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductTypes } from "@/lib/types";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useQuery } from "@tanstack/react-query";
import {
  CopyIcon,
  CreditCard,
  FacebookIcon,
  Handshake,
  Headphones,
  Medal,
  Truck,
  Twitter,
} from "lucide-react";
import { FaPinterest, FaStar } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const fetchProducts = async (id: string) => {
  const response = await fetch(`http://localhost:8000/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProducts(id as string),
    enabled: !!id,
  });
  const product: ProductTypes = data;
  const navigate = useNavigate();

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const quantityDecrease = useCartStore((state) => state.decreaseQuantity);
  const quantityIncrease = useCartStore((state) => state.increaseQuantity);
  const wishlist = useWishlistStore((state) => state.wishlist);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const cartItem = cart.find((item) => item.product.id === product?.id);
  const cartQuantity = cartItem?.quantity ?? 0;
  console.log(wishlist);

  const handleAddtoCart = (product: ProductTypes) => {
    addToCart(product);
    toast.success(`${product.title} added to cart`);
  };

  const handleQuantityDecrease = (productId: number) => {
    quantityDecrease(productId);
  };

  const handleQuantityIncrease = (productId: number) => {
    quantityIncrease(productId);
  };

  const handleAddtoWishlist = (product: ProductTypes) => {
    addToWishlist(product);
  };
  // const wishlist = useWishlistStore((state) => state.wishlist);
  console.log(wishlist);

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
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-start">
        {/* Image Section */}
        <div className="w-full flex flex-col justify-center">
          <div className=" border border-gray-200 rounded-xs">
            <img src={product.images[0]} alt={product.title} className="w-96" />
          </div>
          <div className="flex w-full items-center justify-between mt-4 gap-3">
            {product.images.map((img, index) => (
              <div
                key={index}
                className="border border-gray-200 hover:border-primary p-2 max-w-64"
              >
                <img src={img} alt="product-image" className="w-20" />
              </div>
            ))}
          </div>
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
          <h2>{product.title}</h2>
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
          <div className="flex items-center gap-2 my-5 ">
            <p className="text-secondary-500 font-semibold text-base">
              ${product.price}
            </p>
            <del className="text-gray">${product.price}</del>
            <p className="px-1.5 py-1 bg-warning font-semibold rounded-xs text-[.8rem]">
              21% OFF
            </p>
          </div>
          <Separator className="w-full my-5 border-t border-gray-300" />
          <div className="flex w-full justify-between items-center gap-4 text-[.7rem] md:text-[.8rem]">
            <div>
              <div>
                <p className="font-semibold">Color</p>
                <div className="border border-gray-200 p-2 ">
                  {product.variants.map((color, index) => (
                    <button key={index} className="rounded-full">
                      {color.color}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold mt-2">Memory</p>
                <div className="border border-gray-200 p-2">
                  <span>{product.specs.memory}</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="font-semibold mt-2">Size</p>
                <div className="border border-gray-200 p-2">
                  <span>{product.specs.size}</span>
                </div>
              </div>
              <div>
                <p className="font-semibold">Storage</p>
                <div className="border border-gray-200 p-2">
                  <span>{product.specs.storage}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center w-full justify-between my-5">
            <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xs">
              <button
                onClick={() => handleQuantityDecrease(product.id)}
                className="px-2 py-1.5 bg-transparent rounded-xs cursor-pointer"
              >
                -
              </button>
              <span className="text-[.8rem]">{cartQuantity}</span>
              <button
                onClick={() => handleQuantityIncrease(product.id)}
                className="px-2 py-1.5 bg-transparent rounded-xs cursor-pointer"
              >
                +
              </button>
            </div>
            <Button
              onClick={() => handleAddtoCart(product)}
              className="text-white rounded-xs text-[.7rem]"
            >
              ADD TO CART <CartIcon />
            </Button>
            <Button
              onClick={() => navigate("/cart")}
              variant={"outline"}
              className="border-primary cursor-pointer text-primary rounded-xs  text-[.7rem]"
            >
              BUY NOW
            </Button>
          </div>
          <div className="flex items-center text-[.7rem] justify-between text-gray">
            <div className="flex item-center">
              <p
                onClick={() => handleAddtoWishlist(product)}
                className="flex items-center gap-1 hover:text-primary"
              >
                <HeartIcon className="w-4" /> Add to Wishlist
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p>Share product:</p>
              <div className="flex items-center gap-1">
                <CopyIcon className="w-4 hover:text-primary" />
                <FacebookIcon className="w-4 hover:text-primary" />
                <Twitter className="w-4 hover:text-primary" />
                <FaPinterest className="w-4 hover:text-primary" />
              </div>
            </div>
          </div>
          <div className="border border-gray-200 p-3">
            <p className="text-[.8rem] mb-3">100 Guarantee Safe Checkout</p>
            <img src="/images/Payment Method.png" alt="payment-methods" />
          </div>
        </div>
      </div>

      {/* descriptions and reviews */}
      <div className="border border-gray-200 my-10">
        <div className="flex flex-col border  border-gray-200 text-center justify-center gap-5">
          <div className="flex flex-row items-center gap-5 justify-center">
            <h2 className="text-[.6rem] font-medium pb-4 py-2 border-b-primary border-b-2">
              DESCRIPTIONS
            </h2>
            <h2 className="text-[.6rem] font-medium pb-4 py-2 border-b-primary border-b-2">
              REVIEWS
            </h2>
          </div>
        </div>
        <div className="p-3 flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-10">
          <div className="flex-2">
            <h3 className="text-[.6rem] font-semibold">Description</h3>
            <p className="text-[.6rem] text-gray-400">{product.description}</p>
          </div>
          <div className="flex-1">
            <h3 className="text-[.6rem] font-semibold ">Features</h3>
            <div className="text-[.6rem]">
              <p className="flex items-center">
                <Medal className="text-primary mr-2" size={16} />
                Free 1 Year Warranty
              </p>
              <p className="flex items-center">
                <Truck className="text-primary mr-2" size={16} /> Free Shipping
                & Fasted delivery
              </p>
              <p className="flex items-center">
                <Handshake className="text-primary mr-2" size={16} /> 100%
                Money-back guarantee
              </p>
              <p className="flex items-center">
                <Headphones className="text-primary mr-2" size={16} /> 24/7
                Customer support
              </p>
              <p className="flex items-center">
                <CreditCard className="text-primary mr-2" size={16} />
                Secure payment method
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-[.6rem] font-semibold">Shipping Information</h3>
            <div className="text-[.6rem] text-gray">
              <p>
                <span className="text-black">Courier:</span> 2-4 days, free
                shipping
              </p>
              <p>
                <span className="text-black">Local Shipping:</span> Up to one
                Week, $19:00
              </p>
              <p>
                <span className="text-black">UPS Ground Shipping:</span> 4-6
                days, $29:00
              </p>
              <p>
                <span className="text-black">Unishop Global Export:</span> 3-4
                days, $39:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
