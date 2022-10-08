import React ,{forwardRef}from 'react'

 const  Select=({
  selectionOption  ,
   classsNam , 
   isRequired=false,
    ...props}) =>{
  return (
  
    <div>
      <select  {...props}  required={isRequired} className={`select select-bordered w-full max-w-xs ${classsNam}`}>
      {
        selectionOption?
        selectionOption.map((item , index)=>(
          <option key={index}   value={item}>{item}</option>
        ))
        :(
          <option value={null}>Not Options</option>
        )
      }
      </select>
    </div>
  )
}
export default forwardRef(Select);