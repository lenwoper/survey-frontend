import React from "react";
import { Header } from "components";
import { Toaster } from 'react-hot-toast';

export default function Layout() {

  return (
    <div className="font-sans ">
      <Toaster toastOptions={{
       className: 'lg:text-sm md:text-sm text-xs lg:mt-[9%] md:mt-[12%] mt-[25%]',
        style: {
         border:"1px solid #c0c0c0"
        },
      }} />
      <Header />
    </div>
  );
}