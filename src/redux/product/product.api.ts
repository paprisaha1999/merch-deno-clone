import { Product } from "./../../utils/types";
import axios, { AxiosResponse } from "axios";

// whole products data
export const getProductsAPI = async () => {
  let res: AxiosResponse<Product[]> = await axios.get(
    "http://localhost:8080/products"
  );
  return res.data;
};

// single product data
export const getProductAPI = async (id: string) => {
  let res: AxiosResponse<Product> = await axios.get(
    `http://localhost:8080/products/${id}`
  );
  return res.data;
};
