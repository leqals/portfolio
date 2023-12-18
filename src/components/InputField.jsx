import React from "react";

const InputField = ({
  label = "Who You Are",
  placeholder = "Your Fullname",
  id,
  onChange,
  required,
  type='text'
}) => {
  return (
    <div className="relative flex w-full flex-lg">
      <div className="flex justify-start flex-col gap-2 w-full">
        <label
          htmlFor={id + "_xboring_tech"}
          className="font-rob text-base font-medium "
        >
          {label} {required ? <span className="font-bold text-lg text-[#ff3333]">*</span> : ''}
        </label>
        <input
          id={id + "_xboring_tech"}
          type={type}
          className="rounded-full bg-white-trans border-white-trans font-rob font-normal p-4 w-full transition-all duration-300 text-dark-200 border-2 md:border-4 placeholder:text-dark-100 hover:border-dark-200 focus:border-dark-200 hover:bg-transparent focus:bg-transparent focus:outline-none"
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          required={required}
        />
      </div>
    </div>
  );
};

export default InputField;
