export type Product = {
  name: string;
  brandId: string;
  price: number;
  qtySold: number;
  image: string;
  id: string;
  createAt: string;
};

export type ProductListConfig = {
  brandIds?: string[];
  priceFrom?: number;
  priceTo?: number;
  sortBy: "qtySold" | "createAt";
};

export type ProductList = {
  product: Product[];
};
