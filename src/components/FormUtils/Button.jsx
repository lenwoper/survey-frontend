import React from 'react'

export default function Button({
  isDisabled ,
   text, 
   isLoading = false , 
   className,
   type="submit",
   conaitnerClass,
   ...props}) {
  return (
    <span className={conaitnerClass}>
        <button type={type} disabled={isDisabled} className={`${className} b-0 btn  px-2  ${isLoading && 'loading' }  no-animation ${isDisabled&&'btn-disabled'} `} {...props}>{text}</button>
    </span>
  )
}
