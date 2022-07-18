import React from "react";

type InputPropsType = {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  className?: string;
};
function Input({
  id,
  type,
  label,
  value,
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

export default Input;
