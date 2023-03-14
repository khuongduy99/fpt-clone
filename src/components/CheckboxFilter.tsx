import { ChangeEvent } from "react";
import { Brand } from "../types/brand.type";

type Props = {
  brand: Brand;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function CheckboxFilter({ brand, handleOnChange }: Props) {
  return (
    <div className="col-span-1" key={brand.id}>
      <input
        type={"checkbox"}
        id={brand.id}
        value={brand.id}
        onChange={handleOnChange}
        className="accent-red-600 mr-2 brand_conditions"
      />
      <label htmlFor={brand.id} className="text-xs">
        {brand.name}
      </label>
    </div>
  );
}
