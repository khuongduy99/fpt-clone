import { SetStateAction, useState } from "react";
import { ProductListConfig } from "../types/product.type";

const sortBy = [
  {
    id: "qtySold",
    name: "Bán chạy nhất",
  },
  {
    id: "createAt",
    name: "Mới nhất",
  },
];

type Props = {
  productQueryConditions: ProductListConfig;
  setProductQueryConditions: (value: SetStateAction<ProductListConfig>) => void;
};
export default function SortFilter({
  productQueryConditions,
  setProductQueryConditions,
}: Props) {
  const [active, setActive] = useState("qtySold");

  const handleClick = (event: any) => {
    const value = event.target.id;
    const objectClone = structuredClone(
      productQueryConditions
    ) as ProductListConfig;
    objectClone.sortBy = value;
    setProductQueryConditions(objectClone);
    setActive(value);
  };
  return (
    <>
      <div className="mr-4">Ưu tiên xem</div>
      {sortBy &&
        sortBy.map((item) => {
          return (
            <button
              key={item.id}
              onClick={handleClick}
              id={item.id}
              className={` ${
                active === item.id
                  ? `active_button`
                  : ` border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white`
              }  px-2 py-1 border `}
            >
              {item.name}
            </button>
          );
        })}
    </>
  );
}
