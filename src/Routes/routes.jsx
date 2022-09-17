import React from "react";
import { Header } from "components";
import Login from "pages/Login/Login";
import VerifyOtp from "pages/VerifyOtp/VerifyOtp";
import ForgetPassord from "pages/ForgetPassword/ForgetPassord";
import Signup from "pages/Signup/Signup";
import SurveyForm from './../pages/SurveyForm/SurveyForm';
export const PublicRoutes = [
    {
        path: "/forget",
        component: <Header/> ,
        
    },
    {
        path: "/verify-otp",
        component: <VerifyOtp/>,
        
    },
    {
        path: "/forget-password",
        component: <ForgetPassord/>,
        
    },
     {
        path: "/login",
        component: <SurveyForm/>,
        
    },
      {
        path: "/signup",
        component: <Signup/>,
        
    },
     {
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
