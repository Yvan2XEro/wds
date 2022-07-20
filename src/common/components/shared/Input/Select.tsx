import React from "react";
import { InputPropsType } from "./Input";

type SelectPropsType = InputPropsType & {
  options: Array<{ label: string; value: string | number }>;
  id?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
export function Select({
  id = "",
  type = "",
  label,
  value,
  onChange,
  placeholder = "",
  className = "",
  options,
}: SelectPropsType) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <select
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-300 focus:border-primary-300 block w-full p-2.5 " +
          className
        }
      >
        {options.map((o) => (
          <option value={o.value} key={o.label} selected>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
