import React from 'react'

export default function Button({
  isDisabled ,
   text, 
   isLoading , 
   className,
   type="submit",
   conaitnerClass,
   ...props}) {
  return (
    <div className={conaitnerClass}>
        <button type={type} disabled={isDisabled} className={`${className} b-0 btn btn-md px-2  ${isLoading && 'loading' }  no-animation ${isDisabled&&'btn-disabled'} `} {...props}>{text}</button>
    </div>
  )
}
