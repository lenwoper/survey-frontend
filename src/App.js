import Layout from "components/Layout";
import React from "react";
import { Navigate, Outlet, Routes, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "Routes/routes";
import { useAuth } from 'hooks';
const ProtectedRoute = ({ user, redirectPath = "/login" }) => {
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};
const AuthenticateRoute = ({ user, redirectPath = "/profile" }) => {
    if (user) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};
export default function App() {
    const {session } = useAuth(); 
    return (
        <React.Fragment>
            <Routes>
                <Route element={<Layout />}>
                    <Route element={<ProtectedRoute user={session} />}>
                        {
                            PrivateRoutes.map((route, index) => {
                                return (
                                    <Route key={index} path={route.path} element={route.component} {...route} />
                                )
                            })
                        }
                    </Route>
                    <Route

                        element={
                            <React.Suspense fallback={<p>loading..</p>}>
                                <AuthenticateRoute user={session} />
                            </React.Suspense>
                        }
                    >
                        {
                            PublicRoutes.map((route, index) => {

                                return (
                                    <Route key={index} path={route.path} element={route.component} {...route} />
                                )
                            })
                        }
                    </Route>
                </Route>
            </Routes>
        </React.Fragment>
    );
}
