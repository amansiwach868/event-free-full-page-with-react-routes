import React from 'react';

const CustomInput = ({
  label,
  id,
  value,
  onChange,
  type = 'text',
  inputError = false,
  errorText = '',
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`outline-none py-[9px] px-[17px] text-[16px] border w-full rounded-[5px] border-[#999999] text-black/70`}
        placeholder={label}
      />
      {inputError && (
        <p className="text-red-500 text-sm mt-1">{errorText}</p>
      )}
    </div>
  );
};

export default CustomInput;
