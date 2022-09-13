import React from "react";
import { Header } from "components";
import Login from "pages/Login/Login";
export const PublicRoutes = [
    {
        path: "/forget",
        component: <Header/> ,
        
    },
    {
        path: "/login",
        component: <h1>register </h1> ,
        
    }, {
        path: "*",
        component: <h1>not found </h1> ,
    },

];

export const PrivateRoutes = [
    {
        path: "/profile",
        component: <Login/> ,
    },
    {
        path: "*",
        component: <h1>now found </h1> ,
    },
];
