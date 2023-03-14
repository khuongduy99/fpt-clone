import { Product, ProductList, ProductListConfig } from "../types/product.type";
import axiosHttp from "../utils/axiosHttp";

const URL = "products";
const productApi = {
  getProducts(params: ProductListConfig) {
    return axiosHttp.get(URL, {
      params: params,
    });
  },
  getProductDetail(id: string) {
    return axiosHttp.get(`${URL}/${id}`);
  },
};

export default productApi;
