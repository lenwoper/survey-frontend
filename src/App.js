import Layout from "components/Layout";
import React from "react";
import { Routes, Route } from "react-router-dom";
import {  RoutesMapList } from "Routes/routes";
export default function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route element={<Layout />}>
                        {
                            RoutesMapList.map((route, index) => {
                                return (
                                    <Route key={index} path={route.path} element={route.component} {...route} />
                                )
                            })
                        }
                </Route>
            </Routes>
        </React.Fragment>
    );
}
