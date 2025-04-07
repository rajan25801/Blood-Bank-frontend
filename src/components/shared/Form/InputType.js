import React from "react";

const InputType = ({
  labelText,
  labelFor,
  inputType = "text", // default to text if not provided
  value,
  onChange,
  name,
}) => {
  return (
    <div className="mb-1">
      <label htmlFor={labelFor || name} className="form-label">
        {labelText}
      </label>
      <input
        type={inputType}
        className="form-control"
        id={labelFor || name}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputType;
