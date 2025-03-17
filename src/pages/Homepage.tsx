import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Product = {
  id: number;
  name: string;
  price?: number; // Add other properties as needed
};

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>("http://localhost:8000/users");
  return data;
};

const Homepage = () => {
  const { data, isLoading, isError, error } = useQuery<Product[]>({
    queryKey: ["products"], // Unique key for caching
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <main className="px-4 md:px-20 lg:px-40">
      {data?.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </main>
  );
};

export default Homepage;
