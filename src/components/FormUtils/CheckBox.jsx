import React , {forwardRef}from "react";
const CheckBox=(
  {
    className,
    name,
    label,
    
    labelClassName,
    containerName,
    ...props
  }
)=> {
  return (
    <React.Fragment>
      <div className={`${containerName} flex justify-self-auto`}>
        <span><input type="checkbox" {...props} name={name} className={`  ${className} checkbox`} /></span>
        <label htmlFor="radio" className={` pl-2 ${labelClassName} `}>{label}</label>
      </div>
    </React.Fragment>
  )
}
export default forwardRef(CheckBox);