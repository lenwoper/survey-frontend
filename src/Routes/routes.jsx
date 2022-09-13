import React from "react";
import { Header } from "components";
export const PublicRoutes = [
    {
        path: "/forget",
        component: <Header/> ,
        
    },
    {
        path: "/register",
        component: <h1>register </h1> ,
        
    }, {
        path: "*",
        component: <h1>not found </h1> ,
    },

];

export const PrivateRoutes = [
    {
        path: "/home",
        component: <Header/> ,
    },
    {
        path: "*",
        component: <h1>now found </h1> ,
    },
];
