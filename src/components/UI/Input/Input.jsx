import React from "react";
import classes from './Input.module.css'

const Input = ({ className, label, type, placeholder }) => {
  const classesHolder = `${classes.inp} ${className || ""}`;
  return (
    <div className={classesHolder}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder || ""} />
    </div>
  );
};

export default Input;
