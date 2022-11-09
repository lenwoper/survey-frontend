import React from 'react';

const ProgressBar = ({width}) => {
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700" style={{backgroundColor:"#fff"}}>
        <div className={`bg-primary-color h-progress-height rounded-full `} style={{width:`${width}%`}} ></div>
      </div>
    </div>
  );
}

export default ProgressBar;


export const RingProgressSimple = ({value ,props}) => {
  return (
    <React.Fragment>
      <div className={`radial-progress ${props?.bg??'bg-primary '} ${props?.content??'text-primary-content'}  ${props?.borderWidth??'border-2'} ${props?.border??'border-primary'}`} style={{"--value":value?value:0 , "--size": props?.size ?? "12rem"}}><span className={` ${props?.textClassName}`}>{value ??0 }%</span></div>
    </React.Fragment>
  );
}


