import { ChangeEvent, HtmlHTMLAttributes, useEffect, useState } from "react";
import productApi from "../api/product.api";
import FilterOption from "../components/FilterOption";
import ProductCard from "../components/ProductCard";
import SortFilter from "../components/SortFilter";
import { Brand } from "../types/brand.type";
import { Product, ProductListConfig } from "../types/product.type";
import axiosHttp from "../utils/axiosHttp";

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[] | null>();
  const [brands, setBrands] = useState<Brand[]>();
  let [productQueryConditions, setProductQueryConditions] =
    useState<ProductListConfig>({
      brandIds: [],
      priceFrom: 0,
      priceTo: 0,
      sortBy: "qtySold",
    });

  useEffect(() => {
    const { brandIds, priceFrom, priceTo } = productQueryConditions;
    if (brandIds?.length == 0) {
      (
        document.getElementById("select_all_brands") as HTMLInputElement
      ).checked = true;
    }

    if (priceFrom == 0 && priceTo == 0) {
      (
        document.getElementById("select_all_prices") as HTMLInputElement
      ).checked = true;
    }

    productApi.getProducts(productQueryConditions).then((res) => {
      setProducts(res.data);
    });
  }, [productQueryConditions]);
  useEffect(() => {
    axiosHttp.get("/brands").then((res) => {
      setBrands(res.data);
    });
  }, []);

  return (
    <>
      <div className="bg-slate-100">
        <div className="lg:px-[150px] sm:px-5 py-5">
          <div className="grid lg:grid-cols-12 md:grid-cols-12 xs:grid-cols-1">
            <div className="lg:col-span-2 md:col-span-2 xs:px-2">
              <FilterOption
                brands={brands}
                setProductQueryConditions={setProductQueryConditions}
                productQueryConditions={productQueryConditions}
              />
            </div>
            <div className="col-span-10 bg-white rounded-md p-2">
              <div className="flex items-center flex-wrap mb-10 text-sm">
                <SortFilter
                  setProductQueryConditions={setProductQueryConditions}
                  productQueryConditions={productQueryConditions}
                />
              </div>
              <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
                {products?.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
