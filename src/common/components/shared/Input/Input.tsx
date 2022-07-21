import React from "react";

export type InputPropsType = {
  id?: string;
  type?: string;
  min?: number;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
  className?: string;
};
export function Input({
  id = "",
  type = "text",
  label,
  value,
  min = 0,
  onChange,
  placeholder = "",
  className = "",
}: InputPropsType) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        min={min}
        // value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={
          "bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-primary-300 block w-full p-2.5 " +
          className
        }
        required
      />
    </div>
  );
}
