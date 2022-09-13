import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "Routes/routes";
import Layout from "./components/Layout";
import { TextInput } from "./components";
import { Button } from "./components";
import Login from "./pages/Login/Login";
const protectRoutes = ({ user, redirectLink = "/home" }) =>
    user ? (
        <Navigate
            to={redirectLink}
            replace
        />
    ) : (
        <Outlet />
    );
const Autheticate = ({ user, redirectLink = "/" }) =>
    user ? (
        <Outlet />
    ) : (
        <Navigate
            to={redirectLink}
            replace
        />
    );

export default function App() {
    return (
        <React.Fragment>
             <Login/>
       </React.Fragment>
    );
}
