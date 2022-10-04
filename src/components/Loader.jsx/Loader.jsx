import React from "react";
import Spinner from "Assets/spinner-loader.gif";

export default function Loader() {
  return (
    <div className="grid transition-all w-full h-[100vh]">
      <img
        className="m-auto transition-all lg:w-[150px] md:w-[110px] w-[80px] lg:h-[150px] md:h-[110px] h-[80px]"
        src={Spinner}
        alt="loading..."
      />
    </div>
  );
}
