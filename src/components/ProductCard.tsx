import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/product.type";
import { formatCurrency, formatNumberToSocialStyle } from "../utils/utils";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link to="/">
      <div className="flex justify-center col-span-1 hover:translate-y-[-0.05rem] hover:shadow-md duration-100 transition-transform">
        <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <img
            className="rounded-t-lg"
            src={product.image}
            alt={product.name}
          />
          <div className="p-6 sm:p-3">
            <div className="min-h-[40px] overflow-hidden line-clamp-2 text-sm">
              {product.name}
            </div>
            <div className="mt-1">
              <span className="line-through text-xs truncate w-1/2">
                {formatCurrency(product.price)} ₫
              </span>
              <span className="text-lg truncate w-1/2 ml-2 text-red-600">
                {formatCurrency(product.price)} ₫
              </span>
            </div>
            <div className="mt-1 text-sm">
              Đã bán {formatNumberToSocialStyle(product.qtySold)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
