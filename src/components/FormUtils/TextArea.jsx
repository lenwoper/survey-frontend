import React from 'react'

export default function TextArea({
  placeholder,
  className,
  label , 
 isRequired=false,
  labelClassName,
  ...props
}) {
  return (
    <div>
      <div>
        <label htmlFor={'name'} >{label}</label>
        <br/>
        <textarea {...props} required={isRequired} className={`textarea textarea-bordered ${className}`} placeholder={placeholder}></textarea>
      </div>
    </div>
  )
}
