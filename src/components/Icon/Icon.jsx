import React from 'react'

export default function Icon({
  className,
  src,
  alt,
...props 
}) {
  return (
    <div>
      <img src={src} {...props} className={`    ${className}`} alt={alt} />
    </div>
  )
}
