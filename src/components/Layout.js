import React from "react";
import { Header } from "components";
import { Toaster } from 'react-hot-toast';
import 'react-circular-progressbar/dist/styles.css';
export default function Layout() {

  return (
    <div className="font-sans ">
      <Toaster toastOptions={{
        style: {
          border: "1px solid #c0c0c0"
        },
      }} />
      <Header />
    </div>
  );
}