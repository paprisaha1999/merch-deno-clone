import { Cart } from "./../../utils/types";
import axios from "axios";
import { AxiosResponse } from "axios";

export const getCartAPI = async () => {
  let res: AxiosResponse<Cart[]> = await axios.get(
    "https://witty-hose-crab.cyclic.app/carts"
  );
  return res.data;
};

export const addItemToCartAPI = async (productId: number, quantity: number) => {
  let res: AxiosResponse<Cart> = await axios.post(
    "https://witty-hose-crab.cyclic.app/carts",
    { productId, quantity }
  );
  return res.data;
};
