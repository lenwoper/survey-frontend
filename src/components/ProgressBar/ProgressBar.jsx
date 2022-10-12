import React from 'react';

const ProgressBar = ({width}) => {
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6 dark:bg-gray-700" style={{backgroundColor:"#D9D9D9"}}>
        <div className={`bg-primary-color h-progress-height rounded-full `} style={{width:`${width}%`}} ></div>
  {/* <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style="width: 25%"> 25%</div> */}
      </div>
    </div>
  );
}

export default ProgressBar;



  