import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { Brand } from "../types/brand.type";
import { ProductListConfig } from "../types/product.type";
import axiosHttp from "../utils/axiosHttp";
import CheckboxFilter from "./CheckboxFilter";

type Props = {
  brands: Brand[] | undefined;
  productQueryConditions: ProductListConfig;
  setProductQueryConditions: (value: SetStateAction<ProductListConfig>) => void;
};

const prices = [
  {
    id: "price_id_1",
    name: "Dưới 2 triệu",
    value: "0,2000000",
  },
  {
    id: "price_id_2",
    name: "Từ 2 - 4 triệu",
    value: "2000000,4000000",
  },
  {
    id: "price_id_3",
    name: "Từ 4 - 7 triệu",
    value: "4000000,7000000",
  },
  {
    id: "price_id_4",
    name: "Từ 7 - 13 triệu",
    value: "7000000,13000000",
  },
  {
    id: "price_id_5",
    name: "Trên 13 triệu",
    value: "13000000,0",
  },
];

export default function FilterOption({
  brands,
  productQueryConditions,
  setProductQueryConditions,
}: Props) {
  const handleSelectAllBrands = (event: ChangeEvent<HTMLInputElement>) => {
    const brandConditionsCheckbox = document.getElementsByClassName(
      "brand_conditions"
    ) as HTMLCollectionOf<Element>;

    for (let i = 0; i < brandConditionsCheckbox.length; i++) {
      (brandConditionsCheckbox[i] as HTMLInputElement).checked = false;
    }

    const objectClone = structuredClone(
      productQueryConditions
    ) as ProductListConfig;
    objectClone.brandIds = [];
    setProductQueryConditions(objectClone);
  };

  const handleSelectBrand = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    (document.getElementById("select_all_brands") as HTMLInputElement).checked =
      false;

    const objectClone = structuredClone(
      productQueryConditions
    ) as ProductListConfig;

    if (event.target.checked) {
      objectClone.brandIds = productQueryConditions.brandIds && [
        ...productQueryConditions.brandIds,
        value,
      ];

      setProductQueryConditions(objectClone);
    } else {
      objectClone.brandIds =
        productQueryConditions.brandIds &&
        productQueryConditions.brandIds.filter((item) => item != value);
      setProductQueryConditions(objectClone);
    }
  };

  const handleSelectAllPrices = (event: ChangeEvent<HTMLInputElement>) => {
    const priceConditionsCheckbox = document.getElementsByClassName(
      "price_conditions"
    ) as HTMLCollectionOf<Element>;

    for (let i = 0; i < priceConditionsCheckbox.length; i++) {
      (priceConditionsCheckbox[i] as HTMLInputElement).checked = false;
    }

    const objectClone = structuredClone(
      productQueryConditions
    ) as ProductListConfig;

    objectClone.priceFrom = 0;
    objectClone.priceTo = 0;

    setProductQueryConditions(objectClone);
  };

  const handleSelectPrice = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    (document.getElementById("select_all_prices") as HTMLInputElement).checked =
      false;

    const priceConditionsCheckbox = document.getElementsByClassName(
      "price_conditions"
    ) as HTMLCollectionOf<Element>;

    for (let i = 0; i < priceConditionsCheckbox.length; i++) {
      if ((priceConditionsCheckbox[i] as HTMLInputElement).value != value) {
        (priceConditionsCheckbox[i] as HTMLInputElement).checked = false;
      }
    }

    const objectClone = structuredClone(
      productQueryConditions
    ) as ProductListConfig;

    if (event.target.checked) {
      objectClone.priceFrom = Number(value.split(",")[0]);
      objectClone.priceTo = Number(value.split(",")[1]);
      setProductQueryConditions(objectClone);
    } else {
      objectClone.priceFrom = 0;
      objectClone.priceTo = 0;
      setProductQueryConditions(objectClone);
    }
  };

  return (
    <>
      <h3 className="font-semibold text-sm">Hãng sản xuất</h3>
      <div className=" my-2 grid lg:grid-cols-1 md:grid-cols-1 xs:grid-cols-3">
        <div className="col-span-1">
          <input
            type={"checkbox"}
            id="select_all_brands"
            className="accent-red-600 mr-2 condition-brand"
            onChange={handleSelectAllBrands}
          />
          <label htmlFor="select_all_brands" className="text-xs">
            Tất cả
          </label>
        </div>
        {brands &&
          brands?.map((brand) => {
            return (
              <CheckboxFilter
                key={brand.id}
                brand={brand}
                handleOnChange={handleSelectBrand}
              />
            );
          })}
      </div>
      <h3 className="font-semibold text-sm">Mức giá</h3>
      <div className="mt-2 grid lg:grid-cols-1 md:grid-cols-1 xs:grid-cols-3">
        <div className="col-span-1">
          <input
            type={"checkbox"}
            id="select_all_prices"
            onChange={handleSelectAllPrices}
            className="accent-red-600 mr-2"
          />
          <label htmlFor="select_all_prices" className="text-xs">
            Tất cả
          </label>
        </div>
        {prices &&
          prices?.map((price) => {
            return (
              <div className="col-span-1" key={price.id}>
                <input
                  type={"checkbox"}
                  id={price.id}
                  onChange={handleSelectPrice}
                  className="accent-red-600 mr-2 price_conditions"
                  value={price.value}
                />
                <label htmlFor={price.id} className="text-xs">
                  {price.name}
                </label>
              </div>
            );
          })}
      </div>
    </>
  );
}
