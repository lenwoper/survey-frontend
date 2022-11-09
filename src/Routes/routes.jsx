import React from "react";
import {  Loader } from "components";
import SurveyForm from 'pages/SurveyForm/SurveyForm';
import Subscribe from "pages/Subscribe/Subscribe";
const Home = React.lazy(() => import("pages/Home/Home"));

export const RoutesMapList = [
    {
        path: "/",
        component: (
            <React.Suspense fallback={<Loader />}>
                <Home />
            </React.Suspense>
        ),
    },
    {
        path: '/form',
        component: <SurveyForm />
    },
    {
        path: "/subscribe",
        component: <Subscribe />
    },
    {
        path: "*",
        component: (
            <React.Suspense fallback={<Loader />}>
                <Home />
            </React.Suspense>
        ),
    },
];
