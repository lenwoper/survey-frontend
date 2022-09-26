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
