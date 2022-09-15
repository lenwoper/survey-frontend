import React from 'react';
export default function Radio({
  className,
  name,
  label,
  labelClassName,
  containerName,
  ...props
}) {
  return (
    <React.Fragment>
      <div className={`${containerName} flex justify-self-auto`}>
        <span><input type="radio" {...props} name={name} className={`  ${className}  radio`} /></span>  
        <label htmlFor="radio" className={` pl-2 ${labelClassName} `}>{label}</label>
      </div>
    </React.Fragment>
  )
}