import React from "react";
import { Header } from "components";
import { Outlet } from "react-router-dom";
export default function Layout() {
    
    return (
        <div className="font-sans ">
               <Header/>
        </div>
    );
}

