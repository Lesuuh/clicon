import CartIcon from "@/components/icons/CartIcon";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const productss = [
  {
    products:
      "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
    price: "$2,300.00",
    stockStatus: "IN STOCK",
  },
  {
    products:
      "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
    price: "$2,300.00",
    stockStatus: "IN STOCK",
  },
  {
    products:
      "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
    price: "$2,300.00",
    stockStatus: "IN STOCK",
  },
];

export const Wishlist = () => {
  return (
    <section className="my-10 mx-auto w-full max-w-[1400px] px-5 md:px-20">
      <div className="overflow-x-auto">
        <Table className="text-[.7rem] border border-gray-200 w-full">
          <TableHeader className="bg-gray-200 text-[.7rem] border-0">
            <TableRow className="border-0">
              <TableHead className="w-[100px] border-0">PRODUCTS</TableHead>
              <TableHead className="border-0">PRICE</TableHead>
              <TableHead className="border-0">STOCK STATUS</TableHead>
              <TableHead className="text-right border-0">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productss.map((products) => (
              <TableRow key={products.products} className="border-0">
                <TableCell className="font-medium border-0">
                  {products.products}
                </TableCell>
                <TableCell className="border-0">{products.price}</TableCell>
                <TableCell className="border-0">
                  {products.stockStatus}
                </TableCell>
                <TableCell className="text-right border-0">
                  <Button className="text-[.7rem] rounded-xs text-white">
                    ADD TO CART <CartIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
