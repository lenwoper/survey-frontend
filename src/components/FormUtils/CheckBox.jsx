import React from "react";

export default function CheckBox({ error, label, className , ...props }) {
  return (
    <React.Fragment>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className={`label-text  ${className}`}>{label}</span>
          <input type="checkbox"  className={`checkbox  `}  {...props}/>
        </label>
      </div>
    </React.Fragment>
  );
}
