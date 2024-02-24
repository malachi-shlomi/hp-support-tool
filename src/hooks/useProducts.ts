import { useSelector } from "react-redux";
import { Product } from "../lib/interfaces";
import products from "../data/products";

interface HookResult {
  products: Product[];
}

const useProducts = (): HookResult => {
  const { navigation } = useSelector((state: any) => state.case);

  if (navigation === "products") {
    return { products };
  }

  return { products: [] }

};

export default useProducts;
