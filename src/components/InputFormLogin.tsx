import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface Props {
  type?: HTMLInputTypeAttribute | undefined;
  placeholder: string;
  errorMessage: string | undefined;
  register: UseFormRegisterReturn;
}

export default function InputFormLogin({
  type,
  placeholder,
  errorMessage,
  register,
}: Props) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="rounded-sm py-2 px-3 w-full border border-gray-300 outline-none focus:border-gray-500"
      />
      <div className="min-h-[30px]">
        <span className="mx-1 text-sm text-red-600">{errorMessage}</span>
      </div>
    </div>
  );
}
