import React from 'react'

export default function Button({
  isDisabled ,
   text, 
   isLoading , 
   className,
   ...props}) {
  return (
    <div>
        <button disabled={isDisabled} className={`${className} b-0 btn btn-md px-2  ${isLoading && 'loading' }  no-animation ${isDisabled&&'btn-disabled'} `} {...props}>{text}</button>
    </div>
  )
}
